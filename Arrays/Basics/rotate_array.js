//left rotate and array by one place
const arr = [4, 2, 7, 9, 1, 8];

var leftRotateByOne = (arr) => {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
};
// console.log(leftRotateByOne(arr));

//left rotate by d places
//brute force
var leftRotateByDPlaces = (arr, d) => {
  let temp = [];
  d = d % arr.length;

  //store elements upto d index in temp
  for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
  }

  //move remaining elements of array to the front
  let k = 0;
  for (let j = d; j < arr.length; j++) {
    arr[k] = arr[j];
    k++;
  }
  //add temp array elements to the end of array;
  let x = 0;
  for (let m = arr.length - d; m < arr.length; m++) {
    arr[m] = temp[x];
    x++;
  }
  return arr;
};

// console.log(leftRotateByDPlaces(arr, 4)); // TC= O(d+n+n)= O(d+2n)= O(n)

///by Reversing
// [4, 2, 7, 9, 1] d=2
//7 2 4      1 9
// 9 1 4 2 7
var reverse = (arr, start, end) => {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};
var leftRotateUsingReverse = (arr, d) => {
  let n = arr.length - 1;
  reverse(arr, 0, d - 1);
  reverse(arr, d, n);
  reverse(arr, 0, n);
  return arr;
};
console.log(leftRotateUsingReverse(arr, 4));
