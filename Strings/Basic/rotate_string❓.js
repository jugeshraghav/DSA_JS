var rotateString = function (s, goal) {
  //find how many characters are to be left shifted
  let noOfCharsToBeShifted = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === goal[0]) {
      noOfCharsToBeShifted = i;
      break;
    }
  }

  //rotate the string
  let n = s.length - 1;
  let arr = s.split("");

  reverse(arr, 0, noOfCharsToBeShifted - 1);
  console.log(noOfCharsToBeShifted, n, arr);
  console.log(arr.join(""));
  reverse(arr, noOfCharsToBeShifted, n);
  reverse(arr, 0, n);

  return goal === arr.join("") ? true : false;
};

var reverse = function (arr, a, b) {
  while (a <= b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    a++;
    b--;
  }
  return arr;
};
// let s = "abcde",
//   goal = "cdeab";

let s = "bbbacddceeb",
  goal = "ceebbbbacdd";
console.log(rotateString(s, goal));
