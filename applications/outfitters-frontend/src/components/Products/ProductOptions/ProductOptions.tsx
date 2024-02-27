import ProductColorIcon from '../ProductColorIcon/ProductColorIcon';

interface Props {
  options: ProductOptions[];
}

const ProductOptions = ({ options }: Props) => {
  return options.map((option) => {
    return (
      <div className="my-2 flex align-baseline text-[12px]">
        <div className="flex w-24 justify-start font-extrabold">
          {option.key.toUpperCase()}
        </div>
        <div className="flex w-full justify-start gap-6">
          {option.values.map((value) =>
            option.key == 'color' ? (
              <ProductColorIcon colorName={value} />
            ) : (
              <div>{value}</div>
            ),
          )}
        </div>
      </div>
    );
  });
};

export default ProductOptions;
