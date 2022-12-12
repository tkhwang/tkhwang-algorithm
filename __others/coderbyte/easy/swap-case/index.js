function SwapCase(str) {

  var answer = "";
  for (let i = 0; i < str.length; i++) {
    // Upper case
    if ("A".charCodeAt() <= str[i].charCodeAt() && str[i].charCodeAt() <= "Z".charCodeAt()) {
      answer += str[i].toLowerCase();
    }
    // Lower case
    else if ("a".charCodeAt() <= str[i].charCodeAt() && str[i].charCodeAt() <= "z".charCodeAt()) {
      answer += str[i].toUpperCase();
      // etc
    } else {
      answer += str[i];
    }
  }

  return answer;
}

module.exports = SwapCase;