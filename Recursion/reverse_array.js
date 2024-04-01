const arr = [1, 4, 8, 2, 0];
const reverse = (arr, start, end) => {
  if (start >= end) return arr;
  //swap
  temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  return reverse(arr, start + 1, end - 1);
};
console.log(reverse(arr, 0, arr.length - 1));

//using one pointer
const reverse1 = (arr, i) => {
  if (i >= Math.floor(arr.length / 2)) return arr;
  //swap
};
