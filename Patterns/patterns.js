// Q1 print 5 stars horizontally
let str = "";
for (let i = 0; i <= 5; i++) {
  str = str + " * ";
}
// console.log(str); /// * * * * *

//Q2 print 5 stars vertically
for (let i = 0; i <= 5; i++) {
  // console.log("*");
}

// Q3
//
// * * *
// * * *
// * * *
for (let i = 0; i < 3; i++) {
  let horizontalStr = "";
  for (let j = 0; j < 3; j++) {
    horizontalStr = horizontalStr + "*";
  }
  // console.log(horizontalStr);
  horizontalStr = "";
}

//Q 4
// *
// * *
// * * *

for (let i = 0; i < 3; i++) {
  let horizontalStr = "";
  for (j = 0; j < i + 1; j++) {
    horizontalStr = horizontalStr + "*";
  }
  // console.log(horizontalStr);
  horizontalStr = "";
}

//Q 5
// 1
// 1 2
// 1 2 3

for (let i = 1; i <= 3; i++) {
  //i taken as colum
  let horizontalStr = "";
  for (j = 1; j <= i; j++) {
    horizontalStr = horizontalStr + j;
  }
  // console.log(horizontalStr);
  horizontalStr = "";
}

//Q 6
// 1
// 2 2
// 3 3 3

for (let i = 1; i <= 3; i++) {
  let horizontalStr = "";
  for (let j = 1; j <= i; j++) {
    horizontalStr = horizontalStr + i;
  }
  // console.log(horizontalStr);
  horizontalStr = "";
}

//Q 7
// * * *
// * *
// *
for (let i = 3; i >= 1; i--) {
  let horizontalStr = "";
  for (let j = 1; j <= i; j++) {
    horizontalStr = horizontalStr + "*";
  }
  // console.log(horizontalStr);
  horizontalStr = "";
}

// Q 8
// 1 2 3
// 1 2
// 1
for (let i = 3; i >= 1; i--) {
  let horizontalStr = "";
  for (let j = 1; j <= i; j++) {
    horizontalStr = horizontalStr + j;
  }
  // console.log(horizontalStr);
  horizontalStr = "";
}

//Q 9
//  *
// ***
//*****
for (let i = 1; i <= 3; i++) {
  let horizontalStr = " ";
  //space left
  for (j = 1; j <= 3 - i; j++) {
    horizontalStr = horizontalStr + " ";
  }
  for (j = 1; j <= 2 * i - 1; j++) {
    horizontalStr = horizontalStr + "*";
  }

  // console.log(horizontalStr);
  horizontalStr = " ";
}

// Q 10
// *****
//  ***
//   *
for (let i = 3; i >= 1; i--) {
  let horizontalStr = "";
  //add space
  for (let j = 1; j <= 3 - i; j++) {
    horizontalStr += " ";
  }

  //add stars
  for (let j = 1; j <= 2 * i - 1; j++) {
    horizontalStr += "*";
  }
  // console.log(horizontalStr);
  horizontalStr = "";
}

//Q 11
//   *
//  ***
// *****
// *****
//  ***
//   *
function printDiamond(n) {
  let horizontalStr = "";
  for (let i = 1; i <= n; i++) {
    //space left
    for (j = 1; j <= n - i; j++) {
      horizontalStr = horizontalStr + " ";
    }
    //add stars
    for (j = 1; j <= 2 * i - 1; j++) {
      horizontalStr = horizontalStr + "*";
    }

    console.log(horizontalStr);
    horizontalStr = "";
  }

  //...............
  for (let i = n; i >= 1; i--) {
    //add space
    for (let j = 1; j <= n - i; j++) {
      horizontalStr += " ";
    }

    //add stars
    for (let j = 1; j <= 2 * i - 1; j++) {
      horizontalStr += "*";
    }
    console.log(horizontalStr);
    horizontalStr = "";
  }
}

// printDiamond(3);

// Q 12
// *
// **
// ***
// **
// *

function halfDiamond(n) {
  let horizontalStr = "";
  for (let i = 1; i <= n * 2 - 1; i++) {
    let numOfStars = i <= n ? i : n * 2 - i;

    //method 1
    // horizontalStr += "*".repeat(numOfStars);
    // console.log(horizontalStr);
    // horizontalStr = "";

    //method 2
    console.log("*".repeat(numOfStars)); //alternate to above 3 lines

    //method 3
    //   for (let j = 1; j <= numOfStars; j++) {
    //     horizontalStr += "*";
    //   }
    //   console.log(horizontalStr);
    //   horizontalStr = "";
  }
}

// halfDiamond(3);

//Q 13  Binary triangle pattern
// 1
// 01
// 101

const binaryTriangle = (n) => {
  let toBePrinted = 1;
  let horizontalStr = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      horizontalStr += toBePrinted;
      toBePrinted === 1 ? (toBePrinted = 0) : (toBePrinted = 1);
    }
    console.log(horizontalStr);
    horizontalStr = "";
    i % 2 === 0 ? (toBePrinted = 1) : (toBePrinted = 0);
  }
};

// binaryTriangle(5);

//Q 14 Number Crown Pattern
// 1    1
// 12  21
// 123321
const noCrownPattern = (n) => {
  let space = 2 * (n - 1);
  for (let i = 1; i <= n; i++) {
    let horizontalStr = "";
    //print number
    for (let j = 1; j <= i; j++) {
      horizontalStr += j;
    }

    //print space

    for (let s = 1; s <= space; s++) {
      horizontalStr += " ";
    }
    space -= 2;

    //print number
    for (let j = i; j >= 1; j--) {
      horizontalStr += j;
    }
    console.log(horizontalStr);
    horizontalStr = "";
  }
};

// noCrownPattern(3);

//Q15 Increasing No Triangle Patter
const increasingNoTrianglePatter = (n) => {
  let noToBePrinted = 1;
  let horizontalStr = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      horizontalStr += noToBePrinted;
      noToBePrinted++;
    }
    console.log(horizontalStr);
    horizontalStr = "";
  }
};
// increasingNoTrianglePatter(5);

// Q16 Increasing Letter Triangle Pattern
// A
// A B
// A B C

const increasingLetterTrianglePattern = (n) => {
  let ascii = "A".charCodeAt(0);
  let horizontalStr = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      let letterToBePrinted = String.fromCharCode(ascii);
      horizontalStr += letterToBePrinted;
      ascii++;
    }
    console.log(horizontalStr);
    horizontalStr = "";
  }
};

increasingLetterTrianglePattern(3);

//
//Q17
