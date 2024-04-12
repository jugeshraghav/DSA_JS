const floor_ceil = (nums, target) => {
  let floor = -1,
    ceil = -1;
  let start = 0,
    end = nums.length - 1;
  //find floor-lb
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] >= target) {
      end = end - 1;
    } else {
      floor = nums[mid];
      start = mid + 1;
    }
  }

  //reset start and end
  start = 0;
  end = nums.length - 1;
  //find ceil- ub
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] >= target) {
      ceil = nums[mid];
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return [floor, ceil];
};

let arr = [3, 4, 4, 7, 8, 10],
  x = 5;
console.log(floor_ceil(arr, x));
