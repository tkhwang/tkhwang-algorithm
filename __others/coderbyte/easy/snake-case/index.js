function SnakeCase(str) {

  const regexp = /[^a-zA-Z]/g;
  let words = str.split(regexp);

  return words.map((v) =>
    v.toLowerCase()
  ).join('_');
}

module.exports = SnakeCase;