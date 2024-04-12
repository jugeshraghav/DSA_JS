//smallest element that is greater than or equal to the target element

const upper_bound = (arr, target) => {
  let start = 0,
    end = arr.length - 1,
    ans = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
};
console.log(upper_bound([-1, 0, 2, 13, 25, 25, 67], 24));
