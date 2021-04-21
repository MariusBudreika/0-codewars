function removeChar(str){
    let a = str.split('');
    let newstring = '';
    for (let i = 1; i < a.length - 1; i++) {
        newstring += a[i];     
    }
    return newstring
   }
  
   
console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');

// function removeChar(str) {
//     return str.slice(1, -1);
//   }