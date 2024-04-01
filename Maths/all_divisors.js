//print all divisors of a given number
// say 36== 1 2 3 4 6 9 12 18 36

//Brute force-- start checking from 1 till the number, if it divides the number completely keep it in the array
const allDivisorsBrute = (num) => {
  const arrOfDivisors = [];
  let divisor = 1;
  while (divisor <= num) {
    if (num % divisor === 0) {
      arrOfDivisors.push(divisor);
    }
    divisor++;
  }
  return arrOfDivisors;
};
// console.log(allDivisorsBrute(97));

//Method 2 iterate till half of the number
const allDivisors = (num) => {
  const arrOfDivisors = [];
  let divisor = 1;
  while (divisor <= Math.sqrt(num)) {
    if (num % divisor === 0) {
      if (divisor === num / divisor) {
        arrOfDivisors.push(divisor);
      } else {
        arrOfDivisors.push(divisor);
        arrOfDivisors.push(num / divisor);
      }
    }
    divisor++;
  }
  return arrOfDivisors;
};

console.log(allDivisors(36));
