var subsets = function (nums) {
  let n = nums.length;
  let no_of_sets = 1 << n;
  let power_set = [];
  //8 times
  for (let i = 0; i < no_of_sets; i++) {
    let current_set = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        current_set.push(nums[j]);
      }
    }
    power_set.push(current_set);
    // current_set = [];  //not needed as in every iteration it itself is empty.
  }
  return power_set;
};

console.log(subsets([1, 2, 3]));
