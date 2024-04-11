const nums = [10, 2, 4, 30, 1, 2];
const nums2 = [10, 2, 10, 30, 10, 30];
//method 1 : using inbuilt methods

const findSecondLargestNo = (arr) => {
  if (arr.length === 0 || arr.length === 1)
    return "there does not exists any second largest no";
  const uniqueArr = Array.from(new Set(arr));
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr[1];
};

console.log(findSecondLargestNo(nums2)); //TC= ologn

//method 2 :  without inbuilt methods

const findSecondLargestNoUsingLoops = (arr) => {
  if (arr.length === 0 || arr.length === 1)
    return "there does not exists any second largest no";
  let largest = Number.NEGATIVE_INFINITY;
  let second_largest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second_largest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > second_largest) {
      second_largest = arr[i];
    }
  }
  return second_largest;
};

console.log(findSecondLargestNoUsingLoops(nums2)); //TC = N
