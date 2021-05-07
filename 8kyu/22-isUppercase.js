String.prototype.isUpperCase = function() {
    for (let i = 0; i < this.length; i++) {
       if (this[i] = this[i].isUpperCase()) {
           return true
        } 
        else {
            return false
        } 
    }
}

console.log('c'.isUpperCase(), false, 'c is not upper case');
console.log('C'.isUpperCase(), true, 'C is upper case');
console.log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
console.log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
console.log('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');