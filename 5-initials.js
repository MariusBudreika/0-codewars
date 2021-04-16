
function abbrevName(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();

}


    // let b = '';
    // const x = name.split(' ').map(x => x[0]).join('');
    // b = x.toUpperCase();
    // return (b[0] + '.' + b[1]);

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");
console.log(abbrevName("jOnas Pavardenis"), "J. P");



// string.toUpperCase()
/*
let newStr = '';
for (let i = 0; i < name.length; i++) {
    if (name[i].match(/[A-Z]/)) {
        newStr += name[i];
    }

    
}
return newStr[0] + '.' + newStr[1]
*/