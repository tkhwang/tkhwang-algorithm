function ASCIIConversion(str) {

  return str
    .split('')
    .map((v) => v === ' ' ? v : v.charCodeAt())
    .join('');

}

module.exports = ASCIIConversion;