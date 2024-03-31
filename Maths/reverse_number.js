// Problem Statement: Given a number N reverse the number and print it.

//brute force  JS methods
const reverseNum = (num) => {
  //convert to arr then reverse
  const str = num.toString();
  const arr = str.split("");
  arr.reverse();
  //now convert arr to string then to number
  const reversedStr = arr.join("");
  const reversedNum = +reversedStr;
  return reversedNum;
};
// console.log(reverseNum(123));

//Method 2
//convert the no to string
// then loop through it and create a new reversed string
// then convert reversed string to number

//Method 3
//let reversedStr="";
//reversedStr+=reverse*10+num%10;
//num=Math.floor(num/10)
var reverse = function (x) {
  let reversedNum = 0;
  //edge case for negetive number-- take out the - sign then before returning add the - sign back to the result
  let isNoNegetive = x < 0 ? true : false;
  isNoNegetive ? (x = -x) : (x = x);
  while (x !== 0) {
    let digit = x % 10;
    x = Math.floor(x / 10);
    reversedNum = reversedNum * 10 + digit;
  }
  isNoNegetive ? (reversedNum = -reversedNum) : (reversedNum = reversedNum);
  return reversedNum;
};
console.log(reverse(-123));
