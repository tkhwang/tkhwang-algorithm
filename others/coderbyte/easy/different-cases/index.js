function DifferentCases(str) {

  let words = str.split(/[^a-zA-Z]+/g);

  return words.map((v) => v
    .split('')
    .map((v, i) => i === 0 ? v.toUpperCase() : v.toLowerCase())
    .join('')
  ).join('');

}

module.exports = DifferentCases;