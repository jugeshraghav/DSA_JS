// //print anything n number of times recursively

let count = 1;
const print = (n) => {
  console.log("Hello");
  if (count === n) return;
  count++;
  print(n); // Passing 'n' as an argument to the recursive call
};

// print(3);

// Do not use count
const printName = (noOftimesPrinted, n) => {
  if (noOftimesPrinted > n) return;
  console.log("Jugesh");
  printName(++noOftimesPrinted, n); //once dry run for noOfTimesPrinted++
};
printName(1, 3);
