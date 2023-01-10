export const currencyMask = (value) => {
  let valueMask = value;
  valueMask = valueMask.replace(/\D/g, "");
  valueMask = valueMask.replace(/(\d)(\d{2})$/, "$1.$2");
  valueMask = valueMask.replace(/(?=(\d{3})+(\D))\B/g, ",");
  return valueMask;
};
