const arr = [3, 1, 2, 7, 8, 4];
const num = 3;

//brute force method TC=O(n)
var findNum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};

console.log(findNum(arr));
