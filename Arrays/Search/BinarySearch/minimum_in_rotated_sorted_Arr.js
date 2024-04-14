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
const minimum_binary = (arr) => {
  let min = Number.MAX_VALUE;
  let start = 0,
    end = arr.length - 1; //can add some edge cases to reduce time complexity like if arr is already sorted and if there are only two elements in the arr
  if (arr[start] <= arr[end]) return start;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(mid, "mid");
    if (arr[mid] <= arr[end]) {
      if (min > arr[mid]) {
        min = arr[mid];
      }
      end = mid - 1;
    } else {
      if (arr[start] < arr[mid]) {
        min = arr[start];
      }
      start = mid + 1;
    }
  }
  return min;
};

console.log(minimum_binary(arr));
//❓not working in vs code but working fine in console
