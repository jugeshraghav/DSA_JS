//a no is prime when it has only two divisors -- 1 and the number itself

const checkPrime = (num) => {
  if (num === 1 || num === 0) {
    return "Not Prime";
  }
  let divisor = 2; ///we take 2 here as we know every number is divisible by 1
  while (divisor <= Math.sqrt(num)) {
    if (num % divisor === 0) {
      return "Not Prime";
    }
    divisor++;
  }
  return "Prime";
};

console.log(checkPrime(21));
