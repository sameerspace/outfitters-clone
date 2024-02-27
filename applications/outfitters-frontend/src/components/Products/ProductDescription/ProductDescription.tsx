import { transformPrice } from '@/utils/price';
import ProductOptions from '../ProductOptions/ProductOptions';

interface Props {
  product: Product;
}

const ProductDescription = ({ product }: Props) => {
  return (
    <div className="items-startpl-[5rem] flex w-1/3 flex-col pt-[2rem]">
      <div className="text-lg font-bold">{product.title}</div>
      <div className="mt-2 text-xs font-light tracking-tighter">
        {product.handle.toUpperCase().split('-').join('/')}
      </div>
      <div className="mt-2 font-bold">{transformPrice(product.price)}</div>
      <div className="my-6 w-full border-t-2 border-slate-600" />
      <ProductOptions options={product.options} />
    </div>
  );
};

export default ProductDescription;
