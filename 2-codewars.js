function past(h, m, s){
    let mh = h * 3600000;
    let mm = m * 60000
    let ms = s * 1000
  return (mh + mm + ms)
}



console.log(past(0,1,1),61000)
console.log(past(1,1,1),3661000)
console.log(past(0,0,0),0)
console.log(past(1,0,1),3601000)
console.log(past(1,0,0),3600000)