import { transformPrice } from '@/utils/price';
import ProductOptions from '../ProductOptions/ProductOptions';
import BlackButton from '@/components/Buttons/BlackButton/BlackButton';

interface Props {
  product: Product;
}

const ProductDescription = ({ product }: Props) => {
  return (
    <div className="flex w-1/3 flex-col items-start pl-[5rem] pt-[2rem]">
      <div className="whitespace-nowrap text-lg font-bold">{product.title}</div>
      <div className="mt-2 text-xs font-light tracking-tighter">
        {product.handle.toUpperCase().split('-').join('/')}
      </div>
      <div className="mt-2 font-bold">{transformPrice(product.price)}</div>
      <div className="my-6 w-full border-t-2 border-slate-600" />
      <ProductOptions options={product.options} />
      <div className="my-6 w-full border-t-2 border-slate-600" />
      <div className="jusitfy-start my-2 flex w-full text-xs font-bold">
        <button>SIZE GUIDE</button>
      </div>
      <BlackButton onClick={() => {}}>ADD TO CART</BlackButton>
      <div
        className="mt-6"
        dangerouslySetInnerHTML={{ __html: product.description }}
        // temp solution, will create seperate columns in database later
      />
    </div>
  );
};

export default ProductDescription;
