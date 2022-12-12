function NonrepeatingCharacter(str) {

  for (let i = 0; i < str.length; i++) {
    if (str.match(new RegExp(str[i], 'g')).length === 1) {

      return str[i];
    }
  }
}

module.exports = NonrepeatingCharacter;