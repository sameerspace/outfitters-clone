interface Props {
  options: ProductOptions[];
}

const ProductOptions = ({ options }: Props) => {
  options.forEach((option) => {
    if (option.key == 'color') {
    }
  });

  return options.map((option) => (
    <div className="flex">
      <div>{option.key}</div>
      {option.values.map((value: string) => (
        <div>{value}</div>
      ))}
    </div>
  ));
};

export default ProductOptions;
