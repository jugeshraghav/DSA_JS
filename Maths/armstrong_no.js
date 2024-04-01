//Armstrong Numbers are the numbers having the sum of digits raised to power no. of digits is equal to a given number. Examples- 0, 1, 153, 370, 371, 407, and 1634 are some of the Armstrong Numbers.

const armstrong = (num) => {
  let copy = num;
  let copy2 = num;
  let noOfDigits = 0;
  let sumOfDigitsRaisedToPowerNoOfDigits = 0;
  //find no of digits
  while (copy > 0) {
    noOfDigits++;
    copy = Math.floor(copy / 10);
  }

  //check armstrong or not
  while (copy2 > 0) {
    ///if we keep copy2!==0-- this is unable to handle negetive numbers
    let digit = copy2 % 10;
    copy2 = Math.floor(copy2 / 10);
    sumOfDigitsRaisedToPowerNoOfDigits += digit ** noOfDigits;
  }
  return num === sumOfDigitsRaisedToPowerNoOfDigits;
};

console.log(armstrong(-153));
