//You are given a sorted array arr of distinct values and a target value x. You need to search for the index of the target value in the array.

// If the value is present in the array, then return its index. Otherwise, determine the index where it would be inserted in the array while maintaining the sorted order.

// Example 1:
// Input Format: arr[] = {1,2,4,7}, x = 6
// Result: 3
// Explanation: 6 is not present in the array. So, if we will insert 6 in the 3rd index(0-based indexing), the array will still be sorted. {1,2,4,6,7}.

// Example 2:
// Input Format: arr[] = {1,2,4,7}, x = 2
// Result: 1
// Explanation: 2 is present in the array and so we will return its index i.e. 1.

const search_insert_position = (arr, target) => {
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
let arr = [1, 2, 4, 7],
  x = 6;
console.log(search_insert_position(arr, x));

///here we are looking for index where element is just greater than or equal to the target element. So , we can use the code for upper bound here
