export const transformPrice = (price: number): string => {
  const num = `${price / 100}`;

  //TODO: implement logic to add proper commas

  return `PKR ${num}`;
};
