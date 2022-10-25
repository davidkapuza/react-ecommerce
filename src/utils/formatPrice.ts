export const formatPrice = (price: string): string[] => {
  const TAX = 21,
    labelAndAmount = price.split(/([^0-9.])/g).filter(Boolean),
    amount = labelAndAmount[labelAndAmount.length - 1],
    label = labelAndAmount.slice(0, labelAndAmount.length - 1).join(""),
    taxRemntant = (parseFloat(amount) * TAX) / 100,
    priceWithTax = parseFloat(amount) + taxRemntant;
  return [label + taxRemntant.toFixed(2), label + priceWithTax.toFixed(2)];
};
