const arr = [8, 2, 10, 100, -20, 475];

//Brute force method  TC= O(n) SC=O(1)  best approach
var findLargest = (arr) => {
  if (arr.length === 0) return "No element in Array";
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// console.log(findLargest(arr));

//JS methods
// console.log(Math.max(...arr));

//By Sorting the array and finding the max element at last TC=O(nlogn)
var findLargestBySort = (arr) => {
  if (arr.length === 0) return "No element in Array";
  const sortedArr = [...arr].sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 1];
};
console.log(findLargestBySort(arr));
