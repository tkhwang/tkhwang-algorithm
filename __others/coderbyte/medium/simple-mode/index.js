function SimpleMode(arr) {

  i
  let output = {};
  let max = 0

  arr.forEach(function (el) {
    if (output.hasOwnProperty(el)) {
      output[el]++;
    } else {
      output[el] = 1;
    }
  });

  let key = Object.keys(output);
  key.sort((a, b) => output[b] - output[a]);

  return output[key[0]] === 1 ? -1 : Number(key[0]);
}

module.exports = SimpleMode;