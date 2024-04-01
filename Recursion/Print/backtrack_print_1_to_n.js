const print1 = (i, n) => {
  if (i === 0) return;
  print1(i - 1, n);
  console.log(i);
};
print1(4, 4);
//OR
const print = (n) => {
  if (n === 0) return;
  print(n - 1);
  console.log(n);
};

// print(4);
