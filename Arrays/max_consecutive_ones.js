var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let current_max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current_max++;
      if (count < current_max) {
        count = current_max;
      }
    } else {
      current_max = 0;
    }
  }
  return count;
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
