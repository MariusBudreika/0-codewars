function halvingSum(n) {
  let a = 1;
  let x = n;
  let b = n;

  while (n / a >= 1) {
    a = a * 2;
    b = Math.floor(n / a);
    x += b;
  }
  return x;
}

console.log(halvingSum(25));
console.log(halvingSum(127));


// function halvingSum(n) {
//     var sum = 0;
//     while(n > 0) {
//       sum += n;
//       n = Math.floor(n / 2);
//     }
//     return sum;
//   }