interface Props {
  colorName: string;
}

const ProductColorIcon = ({ colorName }: Props) => {
  return (
    <img
      src={`${process.env.NEXT_PUBLIC_COLOR_CDN_URL}/${colorName
        .toLowerCase()
        .replace(' ', '-')}.png`}
      alt={colorName}
      className="h-4 w-4 rounded-[16px]"
    />
  );
};

export default ProductColorIcon;
