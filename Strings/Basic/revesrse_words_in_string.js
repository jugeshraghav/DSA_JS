// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Input: s = "the sky is blue";
// Output: "blue is sky the";

var reverseWords = function (s) {
  s = s.trim(); // Trim leading and trailing spaces
  let space_ptr = s.length;

  // Resulting string
  let res = "";

  // Take out words from string
  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] === " ") {
      if (i + 1 < space_ptr) {
        res += s.slice(i + 1, space_ptr) + " "; // Append word followed by a single space
      }
      space_ptr = i;
    }
  }
  // Add first word
  res += s.slice(0, space_ptr);
  return res;
};

let s = "a good   example";
console.log(reverseWords(s)); // Output: "example good a"

///** leetcode

// var reverseWords = function(s) {
//     const words = [];
//     let word = '';
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== ' ') {
//             word += s[i];
//         } else {
//             word !== '' && words.push(word);
//             word = '';
//         }
//     }
//     word !== '' && words.push(word);
//     return words.reverse().join(' ');
// };
