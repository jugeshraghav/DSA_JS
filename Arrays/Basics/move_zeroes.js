var moveZeroes = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== 0) {
      i++;
    }
    if (nums[i] === 0 && nums[j] !== 0) {
      nums[i] = nums[j];
      nums[j] = 0;
      i++;
    }
  }
  return nums;
};
let nums = [0, 1, 0, 3, 12];
let nums2 = [1, 0, 1];
console.log(moveZeroes(nums2));
//0 1 2 3 4
// i=0  j=1  [0,1,0,3,12]  [1,1,0,3,12] [1,0,0,3,12]
// i=1 j=2   [1,0,0,3,12]
// i=1 j=3   [1,0,0,3,12]  [1,3,0,3,12] [1,3,0,0,12]
//i=2 j=4    [1,3,0,0,12]  [1,3,12,0,12] [1,3,12,0,0]
// i=3 j=5

//chatgpt
// var moveZeroes = function (nums) {
//   let i = 0;
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] !== 0) {
//       nums[i] = nums[j];
//       if (i !== j) {
//         nums[j] = 0;
//       }
//       i++;
//     }
//   }
//   return nums;
// };
