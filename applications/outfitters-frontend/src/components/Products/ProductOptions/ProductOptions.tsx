import ProductColorIcon from '../ProductColorIcon/ProductColorIcon';

interface Props {
  options: ProductOptions[];
}

const ProductOptions = ({ options }: Props) => {
  return options.map((option) => {
    return (
      <div
        key={option.id}
        className="my-2 flex align-baseline text-[12px] uppercase"
      >
        <div className="flex w-24 justify-start font-extrabold">
          {option.key}
        </div>
        <div className="flex w-full justify-start gap-6">
          {option.values.map((value) =>
            option.key == 'color' ? (
              <ProductColorIcon
                key={`${option?.id}`}
                colorName={value}
              />
            ) : (
              <div key={`${option?.id}`}>{value}</div>
            ),
          )}
        </div>
      </div>
    );
  });
};

export default ProductOptions;
