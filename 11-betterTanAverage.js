

function betterThanAverage(classPoints, yourPoints) {
  let vidurkis = 0;
    vidurkis = classPoints.reduce((a, b) => a +b, 0) / classPoints.length;
if (vidurkis > yourPoints) {
  return false
} else return true
}
  


  console.log(betterThanAverage([2, 3], 5), true);
  console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
  console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);


  // function betterThanAverage(classPoints, yourPoints) {
  //   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  // }