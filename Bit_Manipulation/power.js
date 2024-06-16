///given x and n , find x raised to power n
//Method 1: loop till n and multiply ans by x

function power1(x, n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = ans * x;
  }
  return ans;
}

console.log(power1(2, 4)); //TC=O(n)

//Method 2: Optimized
function power2(x, n) {
  let ans = 1;
  while (n != 0) {
    if (n % 2 === 1) {
      ans = ans * x;
      n = n - 1;
    } else {
      n = n / 2;
      x = x * x;
    }
  }
  return ans;
}
console.log(power2(2, 4));
