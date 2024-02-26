'use client';

import { useProducts } from '@/api/hooks/useProducts';
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
      <div className="flex h-[80vh] w-full justify-center">
        <div className="w-1/3 bg-yellow-400">
          <img
            src={product!.images[0].url}
            alt={product!.images[0].alt}
          />
        </div>
        <div className="w-1/3 bg-green-600">
          <div>text</div>
          <div>text</div>
          <div>text</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
