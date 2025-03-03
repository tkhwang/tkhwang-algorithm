function NextPalindrome(num) {

  let answer = undefined;

  for (let i = num;; i++) {
    let str = String(i).split('');
    let str_rvr = String(i).split('').reverse();

    if (str.join('') === str_rvr.join('')) {

      return Number(i);
    }
  }
}

module.exports = NextPalindrome;