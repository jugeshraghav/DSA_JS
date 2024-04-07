//My Way - Brute Force
//(()())(())- in this string there are two primitive strings (()())  and (()), we need to remove outer - first and last paranthesis from both the primitive paranthesis
//1. find out primitive strings and store them in and array
// 2. loop through the array and remove the outer paranthesis of the primitive strings
//3. convert the array to string and return it
var removeOuterParentheses = function (s) {
  let left_paranthesis = 0,
    right_paranthesis = 0;
  let current_primitive_string = "";
  const primitive_str_arr = [];
  for (let i = 0; i <= s.length; i++) {
    if (
      left_paranthesis != 0 &&
      right_paranthesis != 0 &&
      left_paranthesis === right_paranthesis
    ) {
      primitive_str_arr.push(current_primitive_string);
      current_primitive_string = "";
      left_paranthesis = 0;
      right_paranthesis = 0;
    }
    if (s[i] === "(") {
      left_paranthesis++;
      current_primitive_string += "(";
    } else {
      right_paranthesis++;
      current_primitive_string += ")";
    }
  }

  //remove first and last paranthesis of primitive strings
  for (let j = 0; j < primitive_str_arr.length; j++) {
    current_str = primitive_str_arr[j];
    current_str_arr = current_str.split("");
    current_str_arr.pop();
    current_str_arr.shift();
    primitive_str_arr[j] = current_str_arr.join("");
  }
  return primitive_str_arr.join("");
};

let s = "(()())(())";
console.log(removeOuterParentheses(s));

//Method 2
//TC= O(n) SC=O(1)

// var removeOuterParentheses = function (S) {
//   let parenthesCount = 0;
//   let result = "";

//   for (const letter of S) {
//     if (letter === "(") {
//       if (parenthesCount) {
//         result += letter;
//       }
//       parenthesCount++;
//     } else {
//       parenthesCount--;
//       if (parenthesCount) {
//         result += letter;
//       }
//     }
//   }

//   return result;
// };

//Method 3

var removeOuterParentheses = function (s) {
  let results = "";

  const stack = [];
  let separator = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
    }
    if (s[i] === ")") {
      stack.pop();
      if (stack.length === 0) {
        results += s.slice(separator + 1, i);
        separator = i + 1;
      }
    }
  }

  return results;
};
