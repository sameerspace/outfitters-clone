import { transformPrice } from '@/utils/price';
import ProductOptions from '../ProductOptions/ProductOptions';
import BlackButton from '@/components/Buttons/BlackButton/BlackButton';

interface Props {
  product: Product;
}

const ProductDescription = ({ product }: Props) => {
  return (
    <div className="flex w-1/3 flex-col items-start pl-[5rem] pt-[2rem] uppercase text-slate-800">
      <div className="whitespace-nowrap text-lg font-bold">{product.title}</div>
      <div className="mt-2 text-xs font-light tracking-tighter">
        {product.handle.split('-').join('/')}
      </div>
      <div className="mt-2 font-bold">{transformPrice(product.price)}</div>
      <div className="my-6 w-full border-t-2 border-slate-600" />
      <ProductOptions options={product.options} />
      <div className="my-6 w-full border-t-2 border-slate-600" />
      <div className="jusitfy-start my-2 flex w-full text-xs font-bold">
        <button>SIZE GUIDE</button>
      </div>
      <BlackButton onClick={() => {}}>ADD TO CART</BlackButton>
      {product.fit && (
        <div className="mt-6 text-xs">
          <strong>FIT</strong>
          <span className="ml-2">{product?.fit}</span>
        </div>
      )}
      {product.description && (
        <div className="mt-6 text-xs leading-5">{product?.description}</div>
      )}
      <div className="mt-6 text-xs font-bold">COMPOSTION & CARE</div>
      <div className="mt-6 flex flex-col text-xs leading-5">
        {product.care.map((careitem: string) => (
          <div>{careitem}</div>
        ))}
      </div>
      <div className="jusitfy-start my-6 flex w-full text-xs font-bold">
        <button>DELIVERIES & RETURNS</button>
      </div>
    </div>
  );
};

export default ProductDescription;
