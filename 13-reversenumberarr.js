function digitize(n) {
    let a = [];
    let digits = (""+n).split("").reverse();
    return digits.map(x=> parseInt(x));
}


// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }



console.log(digitize(35231),[1,3,2,5,3]);
