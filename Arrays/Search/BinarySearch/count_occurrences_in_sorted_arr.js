// You are given a sorted array containing N integers and a number X, you have to find the occurrences of X in the given array.

const count_occurrences = (nums, target) => {
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

  return last_occ - first_occ + 1;
};

let target = 13,
  arr = [3, 4, 13, 13, 13, 20, 40];
console.log(count_occurrences(arr, target));
