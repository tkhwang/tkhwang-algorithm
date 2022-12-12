function ABCheck(str) {
  // convert the whole string to lowercase letters
  var str = str.toLowerCase();

  // loop through the string
  for (var i = 0; i < str.length; i++) {
    // check for "a...b"
    if (str[i] === "a" && str[i + 4] === "b") {
      return true;
    }

    // check for "b...a"
    if (str[i] === "b" && str[i + 4] === "a") {
      return true;
    }

    // NOTE: in JavaScript we don't have to worry about out-of-bounds errors
    // because it just returns undefined and the program keeps running
  }

  // if none of above were encountered
  // then return false by default
  return false;
}

module.exports = ABCheck;