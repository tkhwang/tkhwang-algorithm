function FizzBuzz(num) {

  let answer = '';

  for (let i = 1; i <= num; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      answer += "FizzBuzz" + ' ';
    } else {
      if (i % 3 === 0) {
        answer += "Fizz" + ' ';
      } else if (i % 5 === 0) {
        answer += "Buzz" + ' ';
      } else {
        answer += i + ' ';
      }
    }
  }

  return answer.trim();
}

module.exports = FizzBuzz;