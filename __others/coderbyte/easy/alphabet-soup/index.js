// function AlphabetSoup(str) {

//   // code goes here  
//   return str.split(" ")
//     .map(word =>
//       word
//       .split('')
//       .sort(function (a, b) {
//         if (a < b) return -1;
//         if (a > b) return 1;
//         return 0;
//       })
//       .join('')
//     ).join(' ')
// }

function AlphabetSoup(str) {

  let s = str.split(' ');
  return s.sort().join(' ');
}

m = "Argument goes here";
console.log(AlphabetSoup(m));