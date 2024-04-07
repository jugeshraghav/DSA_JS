var largestOddNumber = function (num) {
  let largest = "";
  let current = "";
  for (let i = 0; i < num.length; i++) {
    current += num[i];
    if (Number(num[i]) & 1 && Number(largest) < Number(current)) {
      largest = current;
    }
  }
  return largest;
};

//
var largestOddNumber = function (num) {
  for (let i = num.length; i >= 0; i--) {
    if (Number(num[i]) & 1) return num.slice(0, i + 1);
  }
  return "";
};
