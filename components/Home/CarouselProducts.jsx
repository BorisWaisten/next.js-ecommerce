'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchProducts } from '@/lib/mongodb/fetch';

export function CarouselProducts() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    async function getImage() {
      const fetchProductsRef = await fetchProducts();
      const imagesUrl = fetchProductsRef.map((product) => product.image);
      setImages(imagesUrl);
    }

    getImage();
  }, []);

  const getNextIndex = (index) => (index + 1) % images.length;
  const getPrevIndex = (index) => (index - 1 + images.length) % images.length;

  return (
    <div className="relative w-full h-96 overflow-hidden flex items-center justify-center">
      {images.length > 0 && (
        <>
          <div className="relative flex w-full h-full justify-center">
            <div className="relative w-1/3 h-full transition-transform duration-300 transform hover:scale-105 ">
              <Image
                src={images[getPrevIndex(currentIndex)]}
                alt={`Image ${getPrevIndex(currentIndex) + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="relative w-1/3 h-full transition-transform duration-300 transform hover:scale-105 ">
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="relative w-1/3 h-full transition-transform duration-300 transform hover:scale-105 ">
              <Image
                src={images[getNextIndex(currentIndex)]}
                alt={`Image ${getNextIndex(currentIndex) + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
            <button
              onClick={prevSlide}
              className="bg-white text-black rounded-full p-2 bg-opacity-50 hover:bg-opacity-100 transition"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="bg-white text-black rounded-full p-2 bg-opacity-50 hover:bg-opacity-100 transition"
            >
              ❯
            </button>
          </div>

        </>
      )}
    </div>
  );
}
