'use client';

import { useProducts } from '@/api/hooks/useProducts';
import BackButton from '@/components/Buttons/BackButton/BackButton';
import ProductDescription from '@/components/Products/ProductDescription/ProductDescription';
import ProductImageSlider from '@/components/Products/ProductImageSlider/ProductImageSlider';
import Spinner from '@/components/Spinner/Spinner';
import Image from 'next/image';

interface Props {
  params: { handle: string };
}

const Page = ({ params }: Props) => {
  const { handle } = params;
  const { data: product, isError, isLoading } = useProducts(handle);

  return isLoading ? (
    <div className="flex w-full flex-col items-center">
      <Spinner />
    </div>
  ) : (
    <div className="w-full">
      <div className="flex h-6 w-full items-center justify-start px-8">
        <BackButton />
      </div>
      <div className="flex h-[90vh] w-full justify-center gap-16">
        <div className="w-1/3 border-r-[1px] border-r-black pr-6">
          <img
            src={product!.images[0].url}
            alt={product!.images[0].alt}
            className="h-[90vh] object-cover"
          />
        </div>
        <ProductDescription product={product!} />
      </div>
    </div>
  );
};

export default Page;
