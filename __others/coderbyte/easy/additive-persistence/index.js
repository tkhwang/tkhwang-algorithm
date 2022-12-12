  function AdditivePersistence(num) {

    let cal = num;
    let count = 0;

    function addDigits(num) {
      return String(num)
        .split('')
        .map((v) => parseInt(v))
        .reduce((a, b) => a + b, 0);
    }

    while (cal > 9) {
      cal = addDigits(cal);
      count++;
    }
    return count;
  }

  module.exports = AdditivePersistence;