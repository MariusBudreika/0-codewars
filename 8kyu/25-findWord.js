function isLockNessMonster(s) {
   if (s.includes('tree fiddy')) {
       return true
   } if (s.includes('3.50')) {
       return true
   } else return false
  }




console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
console.log(!isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));


// function isLockNessMonster(s) {
//     return s.includes("tree fiddy") || s.includes("3.50");
//   }