function HammingDistance(strArr) {

  let count = 0;

  for (let i = 0; i < strArr[0].length; i++) {
    if (strArr[0][i] !== strArr[1][i]) {
      count++;
    }
  }

  return count;
}


module.exports = HammingDistance;