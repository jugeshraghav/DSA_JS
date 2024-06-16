var plusOne = function (digits) {
  let number = +digits.join("");
  number += 1;
  console.log(number);
  let string = number.toString();
  digits = string.split("");
  return digits;
};
let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
let digits2 = [4, 3, 2, 1];
let digits3 = [1, 2, 3];
let digits4 = [9, 9];

// console.log(plusOne(digits));
//Solution one not working for above example

var plusOneOptimized = (digits) => {
  let lastDigit = +digits[digits.length - 1] + 1;
  lastDigitStringArr = lastDigit.toString().split("");
  digits.pop();
  digits.push(...lastDigitStringArr);
  return digits;
};
// console.log(plusOneOptimized(digits)); ///doesnt work for [9,9]

//leetcode copied
var plusOneLeet = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
console.log(plusOneLeet(digits2));
