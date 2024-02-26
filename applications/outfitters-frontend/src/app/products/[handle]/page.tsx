'use client';

import { useProducts } from '@/api/hooks/useProducts';
import Spinner from '@/components/Spinner/Spinner';

interface Props {
  params: { handle: string };
}

const Page = ({ params }: Props) => {
  const { handle } = params;
  const { data: product, isError, isLoading } = useProducts(handle);

  return (
    <div className="flex w-full flex-col items-center">
      {isLoading ? <Spinner /> : <div>{product?.title}</div>}
    </div>
  );
};

export default Page;
