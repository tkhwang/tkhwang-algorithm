function CountingMinutesI(str) {

  // "12:30pm-12:00am"
  let time = str.split('-');
  console.log('time = ', time);

  return str;

}

module.exports = CountingMinutesI;