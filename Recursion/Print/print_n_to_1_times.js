const printNto1 = (n) => {
  if (n === 0) return;
  console.log(n);
  printNto1(--n);
};
printNto1(4);
