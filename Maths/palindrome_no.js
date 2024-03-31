var isPalindrome = function (x) {
  let num = x;
  if (num < 0) return false;
  if (num === 0) return true;
  if (num % 10 === 0) return false;

  let reversed = 0;
  while (num !== 0) {
    let digit = num % 10;
    num = Math.floor(num / 10);
    reversed = reversed * 10 + digit;
  }
  const isPalindrome = x === reversed;
  console.log(x, reversed, isPalindrome);
  if (isPalindrome) {
    return true;
  } else {
    return false;
  }
};

//shorter code
var isPalindrome = function (x) {
  var reverse = 0;
  var copy = x;

  //The loop break when the copy of original number becomes zero
  //Also negative number cannot be a palindrome
  while (copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit;
    copy = Math.floor(copy / 10);
  }

  return reverse == x;
};
console.log(isPalindrome(121));
