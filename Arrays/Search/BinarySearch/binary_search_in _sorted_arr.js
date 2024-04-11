var search = function (nums, target) {
  return binarySearch(nums, 0, nums.length - 1, target);
};

var binarySearch = function (arr, start, end, target) {
  console.log(arr, start, end, target);

  //Termination case
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);
  console.log("mid", mid);
  if (arr[mid] === target) {
    return mid;
  } else if (target > arr[mid]) {
    return binarySearch(arr, mid + 1, end, target); ///❓why can't we mention arr.length-1 in place of end
  } else {
    return binarySearch(arr, start, mid - 1, target);
  }
};

// let nums = [-1, 0, 3, 5, 9, 12],
//   target = 9;
let nums = [-1, 0, 3, 5, 9, 12],
  target = 2;
console.log(search(nums, target));
