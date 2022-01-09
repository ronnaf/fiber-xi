export const getRemInPx = (rem: number | string) => {
  let value: number = 0;
  if (typeof rem === "string") {
    const index = rem.indexOf("rem");
    if (index !== -1) {
      value = parseInt(rem.substring(0, index));
    }
    value = parseInt(rem);
  } else if (typeof rem === "number") {
    value = rem;
  }
  return value * 16;
};
