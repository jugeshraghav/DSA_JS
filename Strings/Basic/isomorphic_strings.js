var isIsomorphic = function (s, t) {
  //map
  let myMap = {};

  //
  for (let i = 0; i < s.length; i++) {
    if (myMap[s[i]] === undefined) {
      if (Object.values(myMap).includes(t[i])) return false;
      myMap[s[i]] = t[i];
    } else {
      if (myMap[s[i]] != t[i]) return false;
    }
  }
  return true;
};

//leetcode
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map1 = {};
  const map2 = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!map1[charS]) {
      map1[charS] = charT;
    } else if (map1[charS] !== charT) {
      return false;
    }

    if (!map2[charT]) {
      map2[charT] = charS;
    } else if (map2[charT] !== charS) {
      return false;
    }
  }

  return true;
}

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
