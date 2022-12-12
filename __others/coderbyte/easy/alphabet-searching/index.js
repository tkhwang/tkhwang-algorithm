function AlphabetSearching(str) {

  const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
  let chs = str.replace(/[^a-zA-Z]/g, '').split('');

  for (let i = 0; i < ALPHA.length; i++) {
    if (!chs.includes(ALPHA[i])) {
      return false;
    }
  }
  return true;
}

module.exports = AlphabetSearching;