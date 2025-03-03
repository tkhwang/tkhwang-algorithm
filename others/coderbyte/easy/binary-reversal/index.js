function BinaryReversal(str) {

  /*
  47 = 0010 1111 => reverse  1111 0100
  */
  console.log(str);

  let num = str.toString(2)
  let len = num.length;
  let len_target = len;

  console.log(num, len);
  while (len_target % 4 !== 0) {
    len_target++;
  }

  //console.log(num_4th, num_4th.length);

  num = num.split('')
    .reverse()
    .join('');

  let s = ('0'.repeat(len_target) + num).slice(-1 * len_target);
  console.log(s);

  return parseInt(s, 2);
}

module.exports = BinaryReversal;