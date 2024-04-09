//find the minimum no of bits required to be flipped to convert a no to other
//eg - start=10    I O I O
//     goal=7      O I I I
// no_of_bits_flipped=3

// this is not a right approach as we know the integers are stored as bits in computer but when we try accessing it in binary format the preceding 0s are neglected. so 10 = 1 0 1 0 not 0 0 0 0 0 .......1 0 1 0
// var bitsFlipped = (start, goal) => {
//   //convert the numbers to binary
//   start = start.toString(2);
//   goal = goal.toString(2);

//   //set a counter that counts the no of bits to be flipped
//   let count = 0;
//   //loop through the number 1 and check whether the bits of start and goal are same or not
//   // if the bits are not same increase the counter by 1
//   let length = start.length > goal.length ? start.length : goal.length;
//   console.log(length);
//   for (i = length; i >= 0; i--) {
//     console.log(start[i], goal[i]);
//     if (start[i] != goal[i]) {
//       count++;
//     }
//   }
//   return count;
// };

//Correct
var minimum_bits_flipped = (start, goal) => {
  //find XOR of start and goal
  let xor = start ^ goal;

  //count set bits of xor
  let count = 0;
  while (xor != 0) {
    count++;
    xor = xor & (xor - 1);
  }
  return count;
};

console.log(minimum_bits_flipped(10, 7));
