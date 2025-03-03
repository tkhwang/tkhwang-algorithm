function StringMerge(str) {

  let inputs = str.split('*');
  let output = [];

  let temp = inputs.map((v) => v.split(''));
  for (let i = 0; i < temp[0].length; i++) {
    output.push(temp[0][i]);
    output.push(temp[1][i]);
  }

  return output.join('');
}

module.exports = StringMerge;