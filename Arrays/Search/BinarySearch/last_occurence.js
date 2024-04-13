// Example 1:
// Input: N = 7, target=13, array[] = {3,4,13,13,13,20,40}
// Output: 4
// Explanation: As the target value is 13 , it appears for the first time at index number 2.

// Example 2:
// Input: N = 7, target=60, array[] = {3,4,13,13,13,20,40}
// Output: -1
// Explanation: Target value 60 is not present in the array

const last_occurence = (nums, target) => {
  let start = 0,
    end = nums.length - 1;
  let last_occ = -1;
  let first_occ = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      last_occ = mid;
      start = mid + 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  //reset start and end pointers
  (start = 0), (end = nums.length);
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      first_occ = mid;
      end = mid - 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return [first_occ, last_occ];
};

let target = 13,
  arr = [3, 4, 13, 13, 13, 20, 40];
console.log(last_occurence(arr, target));
