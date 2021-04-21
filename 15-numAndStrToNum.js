function sumMix(x){
let newArr = 0;
let naujas = 0;
 for (let i = 0; i < x.length; i++) {
     if (typeof x[i] === 'number') {
        newArr += x[i];
        
     } else if (typeof x[i] === 'string')
     naujas = parseInt(x[i], 10);
     console.log(naujas);
     newArr += naujas;
     naujas = 0;
 } 
 return newArr
}

console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
//   }

// function sumMix(x){
//     var somme = 0;
//     for (i = 0; i<x.length; i++) {
//       somme += Number(x[i]);
//     }
//     return somme;
//   }

// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
//   }