/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
  const res = [];
  let prevKey = null;

  const generateKey = (w) => w.split('').sort().join('');

  for (const w of words) {
    const curKey = generateKey(w);
    if (curKey !== prevKey) {
      res.push(w);
      prevKey = curKey; // 마지막으로 남긴 단어의 서명 갱신
    }
    // 같다면 애너그램이므로 w는 건너뜀(삭제)
  }
  return res;
};