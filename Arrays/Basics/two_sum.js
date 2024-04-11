//Q- Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//Brute Force Method: We take one element at a time and check whether any other element in the remaining array forms a pair with it---here we can return either true or false ,,, or the indexes of elements forming a pair.
var twoSumTwoLoops = (arr, target) => {
  let resArrOfPairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true; // if such pair exists return true else false
        // return [i,j];  //if such pair exists then return that single pair
        // resArrOfPairs.push([i,j]) // if more than one pair exists then store the pairs in an array then return it at the end
      }
    }
  }
  return false;
};

///Better Approach ---Two Pointer Approach--- if we only want to check whether such pair exists or not
//1. sort the array
//2. take two pointers start=0 and end=arr.length-1
//3. add elements at start and end
// case 1 : if (elem(at start)+elem(at end)>target) end--
// case 2 : if (elem(at start)+elem(at end)<target) start++
// case 3 : if (elem(at start)+elem(at end)===target) return true

// var twoSumTwoPointer = function (nums, target) {
//   nums.sort((a, b) => a - b);
//   let start = 0;
//   let end = nums.length - 1;

//   while (start < end) {
//     console.log(start, end);
//     if (nums[start] + nums[end] > target) {
//       end--;
//     } else if (nums[start] + nums[end] > target) {
//       start++;
//     } else if (nums[start] + nums[end] === target) {
//       return true  ///cant return the indexes of the pair elements as one index we get from the object we will create but the other is the current index in the loop and as the array is sorted so the current index is not equal to the actual index.
//     }
//   }
//   return false;
// };

///using extra space where we can store the elements with there indexes
var twoSumUsingObj = function (nums, target) {
  let myObj = {};
  for (let i = 0; i < nums.length; i++) {
    myObj[nums[i]] = i;
  }

  let goal;
  for (let i = 0; i < nums.length; i++) {
    goal = target - nums[i];
    if (myObj[goal] !== null && myObj[goal] !== i) {
      return [i, myObj[goal]];
    }
  }

  return [];
};

//returning all possible pairs
var twoSum = function (nums, target) {
  let myObj = {};
  for (let i = 0; i < nums.length; i++) {
    myObj[nums[i]] = i;
  }

  let goal;
  let resArr = [];
  for (let i = 0; i < nums.length; i++) {
    goal = target - nums[i];
    if (myObj[goal] !== undefined && myObj[goal] !== i) {
      resArr.push([i, myObj[goal]]);
    }
  }

  return resArr;
};

//using map
const twoSumUsingMap = (nums, target) => {
  const numToIndex = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }
    numToIndex.set(nums[i], i);
  }
  return [];
};

// const nums = [3, 2, 4],
//   target = 6;

// const nums = [3, 3],
//   target = 6;

const nums = [1, 5, 5, 4, 9], //multiple pair example
  target = 10;
console.log(twoSum(nums, target));

//challenge --- in multiple pairs we get same pair twice like [[0,4]...[4,0]] , how to keep only one pair
