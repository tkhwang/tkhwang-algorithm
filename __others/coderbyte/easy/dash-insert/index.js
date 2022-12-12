function DashInsert(str) {

  return String(str)
    .split('')
    .map(function (v, i, str) {
      if (i > 0) {
        //console.log(str[i], str[i - 1]);
        if (str[i - 1] % 2 === 1 && str[i] % 2 === 1) {
          //return (str[i - 1] + "-" + str[i]);
          return ("-" + str[i]);
        } else {
          return str[i];
        }
      } else {
        return v;
      }
    }).join('');

}

module.exports = DashInsert;