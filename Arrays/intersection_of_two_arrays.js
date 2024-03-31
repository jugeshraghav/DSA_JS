// Given two integer arrays nums1 and nums2, return an array of their
// intersection
// . Each element in the result must be unique and you may return the result in any order.

var intersection = function (nums1, nums2) {
  const res = [];

  let small_arr = nums1.length < nums2.length ? nums1 : nums2;
  const bigger_arr = nums1.length < nums2.length ? nums2 : nums1;
  small_arr = Array.from(new Set(small_arr));
  for (let i = 0; i < small_arr.length; i++) {
    if (bigger_arr.includes(small_arr[i])) {
      res.push(small_arr[i]);
    }
  }

  return res;
};

const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
// const nums1 = [4, 9, 5],
//   nums2 = [9, 4, 9, 8, 4];
console.log(intersection(nums1, nums2));
