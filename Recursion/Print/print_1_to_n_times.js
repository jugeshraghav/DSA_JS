const print1toN = (i, n) => {
  if (i > n) return;
  console.log(i);
  print1toN(++i, n);
};
print1toN(1, 4);
