function noBoringZeros(n) {

    for (let i = 0; i < 10; i++) {
        if (n !== 0 && n % 10 == 0 ) {
        n = n/10;    
        } else return n
        }  
}






console.log(noBoringZeros(1450), 145);
console.log(noBoringZeros(960000), 96);
console.log(noBoringZeros(1050), 105);
console.log(noBoringZeros(-1050), -105);
console.log(noBoringZeros(-105), -105);
console.log(noBoringZeros(0), 0);

//let skaiciai = n.toString().split('');


// for (let i = skaiciai.length - 1; i >= 0; i--) {
//     if (skaiciai[i] === '0' && n != 0) {
//         skaiciai.pop();
//         console.log(skaiciai);
//     } else return n; 
// }