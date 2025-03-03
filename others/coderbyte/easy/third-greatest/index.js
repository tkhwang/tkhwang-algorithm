function ThirdGreatest(strArr) {

  let output = {};

  strArr.forEach(word => {
    output[word] = word.length
  });

  let keys = Object.keys(output);
  keys.sort((a, b) => (output[b] - output[a]));

  return keys[2];

}

module.exports = ThirdGreatest;