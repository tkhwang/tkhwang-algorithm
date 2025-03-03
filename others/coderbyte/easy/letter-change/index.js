function LetterChanges(str) {

  // a -> b
  // 모음은 capitalize

  const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYW';
  const LOWER = UPPER.toLowerCase();
  const VOWEL = 'aeiou';

  let tmp = str
    .split('')
    .map((v, i, a) => {
      if (UPPER.includes(v) || LOWER.includes(v)) {
        let ascii = v.charCodeAt();
        let ch = String.fromCharCode(ascii + 1);

        if (ch < 'Z' && ch < 'a') {
          ch = String.fromCharCode(ascii + 1 - 65);
        } else if (ch > 'z') {
          ch = String.fromCharCode(ascii + 1 - 65);
        }
        return ch;
      } else {
        return v;
      }
    })
    .join('');

  return tmp.split('').map(v => VOWEL.includes(v) ? v.toUpperCase() : v).join('');
}

module.exports = LetterChanges;