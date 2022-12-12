function ArithGeo(arr) {

  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < 2) continue;
    else {
      //console.log(arr[i - 2], arr[i - 1], arr[i]);

      if ((arr[i] - arr[i - 1]) === (arr[i - 1] - arr[i - 2])) {
        answer.push('Arithmetic');
      } else if ((arr[i] / arr[i - 1]) === (arr[i - 1] / arr[i - 2])) {
        answer.push('Geometric');
      } else {
        return '-1';
      }
    }
  };

  return answer
    .map((v, i, answer) => answer[i] === 'Arithmetic' ? 'Arithmetic' : answer[i] === 'Geometric' ? 'Geometric' : '-1')
    .reduce((p, c) => p !== c ? '-1' : c)
}

module.exports = ArithGeo;