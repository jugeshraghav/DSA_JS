//convert a given number toremainderStr
const findBinary = (num) => {
  let remainderStr = "";
  let binary = 0;

  while (num != 1) {
    remainderStr = remainderStr + (num % 2);
    num = Math.floor(num / 2);
  }
  remainderStr = remainderStr + num;
  //reverse
  //a.convert remainderStr string to number
  remainderStr = Number(remainderStr);
  //b.reverse
  while (remainderStr != 0) {
    let digit = remainderStr % 10;
    binary = binary * 10 + digit;
    remainderStr = Math.floor(remainderStr / 10);
  }

  return binary;
};
console.log(findBinary(13));
