function sumEvenNumbers(input) {
let sum = 0;  
    for (let i = 0; i < input.length; i++) {
       if (input[i] % 2 === 0) {
        sum += input[i];
       }
   }
   return sum
  }


console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  

// function sumEvenNumbers(input) {
//     return input.filter(function(el) {
//       return el % 2 == 0;
//     }).reduce(function(a, b) {
//       return a + b;
//     });
//   }

// const sumEvenNumbers = a => a.reduce((r, e) => r + (e % 2 ? 0 : e), 0);