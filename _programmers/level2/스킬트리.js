// 스킬트리
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/49993

// 2nd try using queue
function solution(_skill, skill_trees) {
  const skill = _skill.split("");
  const set = new Set(skill);

  let count = 0;

  for (const skill_tree of skill_trees) {
    const queue = [...skill];
    let isMatching = true;
    for (const ch of skill_tree) {
      if (!set.has(ch)) continue;

      if (ch === queue[0]) {
        queue.shift();
        if (queue.length === 0) break;
      } else {
        isMatching = false;
        break;
      }
    }
    if (isMatching) count += 1;
  }
  return count;
}

// 1st try using just logic
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
