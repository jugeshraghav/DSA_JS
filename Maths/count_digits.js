//Problem Statement: Given an integer N, write a program to count the number of digits in N.

//Brute Force--- loop
const noOfDigitsBrute = (num) => {
  //convert the number to array of digits
  const str = num.toString();
  const arrOfDigits = str.split("");
  let count = 0;
  for (let i = 0; i < arrOfDigits.length; i++) {
    count++;
  }
  return count;

  //OR simply return length of string
  //   return str.length
};

// console.log(noOfDigitsBrute(123));

//divide
//123%10===>12  this will be done until no becomes 0
const noOfDigitsDivide = (num) => {
  let count = 0;

  while (num !== 0) {
    count++;
    num = Math.floor(num / 10);
    console.log(num);
  }
  return count;
};

// console.log(noOfDigitsDivide(123));

//Logarithmic
//log(12345)=4.9  ===> Math.ceil(4.9)=> 5======> no of digits
const noOfDigitsLog = (num) => {
  return Math.ceil(Math.log10(num));
};

console.log(noOfDigitsLog(123));
