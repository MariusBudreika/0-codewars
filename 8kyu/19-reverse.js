const reverseSeq = n => {
let newArr = [];
for (let i = n; i >0; i--) {
newArr.push(i);
}
    return newArr;
}



console.log(reverseSeq(5), [5, 4, 3, 2, 1]);


// const reverseSeq = n => {
//     return Array(n).fill(0).map((e, i) => n - i );
//   };
  