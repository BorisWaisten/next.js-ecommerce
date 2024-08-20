import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="object-cover"
      />
      <p>{product.description}</p>
      <p className="text-green-500">${product.price}</p>
      <Link href={`/products/${product.category}/${product._id}`} className="text-blue-500">
          View Product
      </Link>
    </div>
  );
};

export default ProductCard;
