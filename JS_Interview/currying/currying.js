const sumOfThree = (x, y, z) => {
  console.log(x + y + z);
};

sumOfThree(2, 3, 4);

//curried
const sumOfThreeCurried = (x) => {
  return function (y) {
    return function (z) {
      console.log(x + y + z);
    };
  };
};
sumOfThreeCurried(3)(4)(5);
