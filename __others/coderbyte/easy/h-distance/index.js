function HDistance(strArr) {

  let distance = 0;

  for (let i = 0; i < strArr[0].length; i++) {
    if (strArr[0][i] !== strArr[1][i]) {
      distance++;
    }
  }

  return distance;
}

module.exports = HDistance;