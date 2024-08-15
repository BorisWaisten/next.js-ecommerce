import './globals.css'
import { CarouselProducts } from '@/components/Home/CarouselProducts';
import { metadata } from './layout';
import  ProductList  from '@/components/Home/ProductList';

metadata.title = 'Home Page';

export default function Home() {

  return (
    <>
      <div className='mt-5'>
        <CarouselProducts />
      </div>
      <section className="my-8">
        <h2 className="text-2xl font-bold text-center mb-4">Productos de Temporada</h2>
        <ProductList />
      </section>
    </>
  );
}