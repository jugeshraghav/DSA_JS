//find no of times the sorted array is rotated
let arr = [4, 5, 1, 2, 3];

const minimum_binary = (arr) => {
  let min = Number.MAX_VALUE;
  let index = -1; //stores no of times array is rotated irrespective of the type of rotation left or right
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] <= arr[end]) {
      if (min > arr[mid]) {
        min = arr[mid];
        index = mid;
      }
      end = mid - 1;
    } else {
      if (arr[start] < arr[mid]) {
        min = arr[start];
        index = start;
      }
      start = mid + 1;
    }
  }
  return [min, index];
};

console.log(minimum_binary(arr));
