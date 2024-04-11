const nums = [1, 2, 3, 1];
const nums2 = [1, 2, 3, 4];
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

const contains_duplicate = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(contains_duplicate(nums2));

//using set
var containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
};

//using sort
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

// using coded sort
const contains_duplicate_coded_sort = (arr) => {
  // Sort the array in non-decreasing order
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // If any two adjacent elements are the same, return true
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
};
