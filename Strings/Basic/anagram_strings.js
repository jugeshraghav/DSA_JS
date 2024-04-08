var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  const myMap = {};
  //add characters of string one to map
  for (let i = 0; i < s.length; i++) {
    if (!myMap[s[i]]) {
      myMap[s[i]] = 1;
    } else {
      myMap[s[i]] = myMap[s[i]] + 1;
    }
  }

  //remove characters from the map while traversing string 2
  for (let j = 0; j < t.length; j++) {
    if (!myMap[t[j]]) {
      return false;
    } else {
      myMap[t[j]] = myMap[t[j]] - 1;
    }
  }

  //check map
  let sum = Object.values(myMap).reduce((acc, curr) => acc + curr, 0);
  return sum === 0 ? true : false;
};

// let s = "anagram",
//   t = "nagaram";

let s1 = "ab",
  t1 = "ba";

console.log(isAnagram(s1, t1));
