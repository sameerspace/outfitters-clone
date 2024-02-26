interface Props {
  product: Product;
}

const ProductDescription = ({ product }: Props) => {
  return (
    <div className="flex w-1/3 flex-col bg-pink-400">
      <div>TITLE</div>
      <div>XYZ</div>
    </div>
  );
};

export default ProductDescription;
