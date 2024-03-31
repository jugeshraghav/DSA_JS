const arr = [1, 5, 5, 6, 14];

//brute force  TC= O(n) SC=O(1)
var isArraySorted = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

console.log(isArraySorted(arr));
