const print = (i, n) => {
  if (i > n) return;
  print(i + 1, 4);
  console.log(i);
};
print(1, 4);
