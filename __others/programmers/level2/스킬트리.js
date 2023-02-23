// 스킬트리
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  const inorders = {};
  for (const [i, ch] of skill.split("").entries()) {
    inorders[ch] = i;
  }

  const N = skill.length;
  let count = 0;

  for (const skill_tree of skill_trees) {
    let found = 0;
    let isStarted = false;
    let isMatched = true;
    for (const ch of skill_tree) {
      // started
      if (isStarted) {
        if (inorders[ch] > found) {
          isMatched = false;
          break;
        } else if (inorders[ch] === found) {
          found += 1;
          if (found >= N) {
            break;
          }
        }
        // not started
      } else {
        if (inorders[ch] === undefined) {
          continue;
        } else {
          if (inorders[ch] > found) {
            isMatched = false;
            break;
          } else if (inorders[ch] === found) {
            isStarted = true;
            found += 1;
          }
        }
      }
    }
    if (isMatched) count += 1;
  }
  return count;
}
