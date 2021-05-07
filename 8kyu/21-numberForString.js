
function howMuchILoveYou(nbPetals) {
let i = 0;
let b = 6;

while (b < nbPetals) {
i += 6;
b += 6;
}
    


let x = nbPetals;
    switch(x) {
    case 1 + i:
        text = "I love you";
        break;
    case 2 + i:
        text = "a little";
        break;
    case 3 + i:
        text = "a lot";
        break;
    case 4 + i:
        text = "passionately";
        break;
    case 5 + i:
        text = "madly";
        break;
    case 6 + i:
        text = "not at all";
        break;        



}
return text
}




console.log(howMuchILoveYou(1),"I love you")
console.log(howMuchILoveYou(3),"a lot")
console.log(howMuchILoveYou(6),"not at all")
console.log(howMuchILoveYou(7),"I love you")

// const phrases = [
//     'I love you',
//     'a little',
//     'a lot',
//     'passionately',
//     'madly',
//     'not at all',
// ]

// function howMuchILoveYou(n) {
//      return phrases[(n - 1) % phrases.length] 
// }