function PrimeTime(num) {

  let divisor = 2;

  while (divisor < num) {
    if (num % divisor === 0) return false;
    divisor++;
  }
  return true;

}

module.exports = PrimeTime;