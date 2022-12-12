function VowelCount(str) {

  const VOWEL = "aeiou";
  const regexp = /[aeiou]/g;

  return str.toLowerCase().match(regexp).length;
}

module.exports = VowelCount;