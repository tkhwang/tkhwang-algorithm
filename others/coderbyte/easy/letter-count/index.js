function LetterCountI(str) {

  let output = {};
  let words = str.split(' ');

  words.forEach(function (word) {
    output[word] = {};
    let temp = word.split('');
    temp.forEach(function (el) {
      if (output[word].hasOwnProperty(el)) {
        output[word][el]++;
      } else {
        output[word][el] = 1;
      }
    })
  })

  let key = {};
  words.forEach(function (word) {
    key[word] = Object.keys(output[word]);
    key[word].sort((a, b) => output[word][b] - output[word][a]);
  })

  let max = 1;
  let answer = '';
  words.forEach(function (word) {
    if (max < output[word][key[word][0]]) {
      max = output[word][key[word][0]];
      answer = word;
    }
  })

  return answer === '' ? '-1' : answer;
}

module.exports = LetterCountI;

m = "Hello apple pie";
LetterCountI(m);