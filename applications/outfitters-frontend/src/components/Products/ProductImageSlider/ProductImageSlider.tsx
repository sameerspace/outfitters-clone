import Image from 'next/image';

interface Props {
  product: Product;
}

const ProductImageSlider = ({ product }: Props) => {
  return (
    <div className="flex">
      <div className="relative h-[853px] w-[481px]">
        <Image
          src={product.images[0].url}
          alt={product.images[0].alt}
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default ProductImageSlider;
