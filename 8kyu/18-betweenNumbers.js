function between(a, b) {
    let Newarr = [];
for (let i = a; i <= b; i++) {
    Newarr.push(i)
}
return Newarr
  }



 console.log(between(1, 4), [1, 2, 3, 4]);
 console.log(between(-2, 2), [-2, -1, 0, 1, 2]);