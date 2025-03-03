function MultiplicativePersistence(num) {

  function toDigit(num) {
    return String(num).split('').map(v => parseInt(v)).reduce((a, b) => a * b, 1);
  }

  let result = num;
  let count = 0;

  while (result > 9) {

    result = toDigit(result);
    count++;
  }

  return count;
}

module.exports = MultiplicativePersistence;