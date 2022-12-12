function CamelCase(str) {

  // Cleaning white space
  let words = str.split(/[^a-zA-Z]/g);

  words = words
    .map(w => w.split('')
      .map((v, i) => i === 0 ? v.toUpperCase() : v.toLowerCase())
      .join('')
    )
    .join('');

  return words.split('')
    .map((v, i) => i === 0 ? v.toLowerCase() : v)
    .join('');
}

module.exports = CamelCase;