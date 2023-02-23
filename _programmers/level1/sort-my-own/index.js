function sortMyOwn(strings, n) {

  function solution(strings, n) {
    return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]))

    // return answer = strings.sort((a, b) => {
    //   if (a[n] > b[n]) return 1;
    //   if (a[n] < b[n]) return -1;
    //   if (a[n] === b[n]) return a.localeCompare(b);
    // });
  }

  module.exports = sortMyOwn;