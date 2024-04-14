//Given an integer array arr of size N, sorted in ascending order (with distinct values). Now the array is rotated between 1 to N times which is unknown. Find the minimum element in the array.

// case 1 : unique elements

//method 1: intution
// Linear search
const minimum_linear = (arr) => {
  let min = Number.MAX_VALUE;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

let arr = [4, 5, 1, 2, 3];
console.log(minimum_linear(arr));

//method 2 : binary
//elimination method: if you can find out the sorted part then take out the smallest of the sorted part as minimum and start searching in the other half
