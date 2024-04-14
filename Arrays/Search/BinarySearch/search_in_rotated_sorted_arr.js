//search an element in rotated sorted array
//case 1 : arr elements are unique
// let arr = [5, 6, 1, 2, 3, 4],
//   target = 3;
let arr = [7, 8, 9, 1, 2, 3, 4, 5, 6],
  target = 1;
//intution: search for element linearly
const search_linear = (arr, target) => {
  let ans = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      ans = i;
      break;
    }
  }
  return ans;
};

// console.log(search_linear(arr, target));

// Binary search as the array is sorted
//we will eliminate one part of array  [7, 8, 9, 1, 2, 3, 4, 5, 6]
const search_binary_unique = (arr, target) => {
  let start = 0,
    end = arr.length - 1;
  let ans = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) ans = mid;
    if (arr[mid] <= arr[end]) {
      if (arr[mid] <= target && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (arr[mid] >= target && target >= arr[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return ans;
};
// console.log(search_binary_unique(arr, target));

//case 2 : if array contains duplicated elements
//return true if target element is present else false;

// let nums = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6],
//   k = 1;

let nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
  k = 2;

const search_duplicate = (arr, target) => {
  let ans = false;
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      ans = true;
    }

    if (arr[mid] === arr[start] && arr[mid] === arr[end]) {
      end = end - 1;
      start = start + 1;
      continue;
    }
    if (arr[mid] <= arr[end]) {
      if (arr[mid] <= target && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (arr[mid] >= target && target >= arr[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return ans;
};
console.log(search_duplicate(nums, k));
