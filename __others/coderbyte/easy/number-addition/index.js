function NumberAddition(str) {

  const regexp = /[^0-9]/g;
  let nums = str.split(regexp);

  let sum = 0;
  return nums
    .map((v) => Number(v))
    .reduce((a, b) => a + b);
}

module.exports = NumberAddition;