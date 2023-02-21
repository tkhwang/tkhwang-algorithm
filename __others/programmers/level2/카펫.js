// 카펫
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  const area = brown + yellow;

  for (let width = 3; width < area - 2; width += 1) {
    if (area % width !== 0) continue;

    const height = area / width;

    const guessedYellow = (width - 2) * (height - 2);

    if (yellow === guessedYellow) return [height, width];
  }
  return [-1, -1];
}
