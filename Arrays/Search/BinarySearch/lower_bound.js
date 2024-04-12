//greatest element index that is smaller than or equal to  the target element.....the given array will be sorted
const lower_bound = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let ans = arr.length;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid - 1;
    } else {
      ans = mid;
      start = mid + 1;
    }
  }
  return ans;
};

console.log(lower_bound([-1, 0, 2, 13, 25, 67], 24));
