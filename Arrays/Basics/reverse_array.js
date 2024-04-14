const arr = [4, 2, 7, 12, 6];

var reverse = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};

// console.log(reverse(arr));

//js method
arr.reverse;
console.log(arr);