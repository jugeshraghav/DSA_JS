const nums = [7, 1, 5, 4]; //4
const nums2 = [9, 4, 3, 2]; //undefined
const nums3 = [1, 5, 2, 10]; //9

const max_diff = (arr) => {
  let max_diff = -1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        if (max_diff < arr[j] - arr[i]) {
          max_diff = arr[j] - arr[i];
        }
      }
    }
  }
  return max_diff;
};
console.log(max_diff(nums2));

//optimised
var maximumDifference = function (nums) {
  let min_val = nums[0];
  let max_diff = -1;

  for (let i = 1; i < nums.length; i++) {
    max_diff = Math.max(max_diff, nums[i] - min_val);
    min_val = Math.min(min_val, nums[i]);
  }

  return max_diff >= 0 ? max_diff : -1;
};
