function Palindrome(str) {
  // code goes here
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] !== str[str.length - i - 1]) {
  //     return false;
  //   }
  // }
  // return true;

  return str.split('').every(function (v, i, array) {
    return ((array[i] === ' ' || array[array.length - 1 - i] === ' ') || (array[i] === array[array.length - 1 - i]));
  });
}

module.exports = Palindrome;