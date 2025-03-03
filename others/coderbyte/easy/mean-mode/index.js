function MeanMode(arr) {

  let sum = 0;
  let mean = 0;
  let mode = {};

  //arr.forEach(el => sum += el);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // mode 최빈값
    if (mode.hasOwnProperty(arr[i])) {
      mode[arr[i]]++;
    } else {
      mode[arr[i]] = 1;
    }
  }

  mean = sum / arr.length;
  // console.log('mean = ', mean);

  // Find the larget mode.
  let keys = Object.keys(mode);
  mode = Number(keys.sort((a, b) => (mode[b] - mode[a]))[0]);
  // console.log('mode = ', mode);

  return mean === mode ? 1 : 0;
}

module.exports = MeanMode;