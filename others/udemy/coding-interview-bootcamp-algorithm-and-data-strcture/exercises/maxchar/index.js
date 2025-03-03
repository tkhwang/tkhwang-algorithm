// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(strs) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of strs) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  /*
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
  */

  let keys = Object.keys(charMap);
  keys.sort((a, b) => charMap[b] - charMap[a]);

  return keys[0];
}

module.exports = maxChar;
