type Item = {
  id: string;
  quantity: number;
  price: number;
};

const calculeAmount = <T extends Item>(items: T[]): number => {
  const result = Object.values(items)
    .reduce(
      (
        acc: number,
        { quantity, price }: { quantity: number; price: number }
      ): number => acc + quantity * price,
      0
    )
    .toFixed(2);

  return Number(result);
};

export default calculeAmount;
