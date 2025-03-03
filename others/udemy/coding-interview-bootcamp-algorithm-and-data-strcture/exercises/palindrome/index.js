// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  /* 
  // #1
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
  */
  /* 
  // #2
  const reversedStr = str
    .split("")
    .reverse()
    .join("");

  return str === reversedStr;
  */

  // #3
  return str.split("").every((ch, i) => ch === str[str.length - 1 - i]);
}

module.exports = palindrome;
