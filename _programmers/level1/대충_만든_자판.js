// 대충 만든 자판
// Level 1
// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymaps, targets) {
  const obj = {};
  for (const keymap of keymaps) {
    for (const [i, ch] of keymap.split("").entries()) {
      if (obj[ch] === undefined) obj[ch] = [];
      obj[ch].push(i + 1);
    }
  }

  for (const key in obj) {
    obj[key].sort((a, b) => a - b);
  }

  const res = [];
  for (const [i, target] of targets.entries()) {
    let count = 0;
    for (const ch of target.split("")) {
      if (obj[ch] === undefined) {
        count = -1;
        break;
      }
      count += obj[ch][0];
    }
    res.push(count);
  }

  return res;
}
