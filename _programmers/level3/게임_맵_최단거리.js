// 게임 맵 최단거리
// Level 3
// https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
  const [ROWS, COLS] = [maps.length, maps[0].length];

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
  const genKey = (r, c) => `${r}:${c}`;

  const bfs = ([initR, initC]) => {
    const queue = [[initR, initC]];
    let steps = 1;

    while (queue.length) {
      const len = queue.length;

      for (let i = 0; i < len; i += 1) {
        const [r, c] = queue.shift();

        if (r === ROWS - 1 && c === COLS - 1) return steps;

        for (const [dR, dC] of directions) {
          const newR = r + dR;
          const newC = c + dC;

          if (!isValid(newR, newC)) continue;
          if (maps[newR][newC] !== 1) continue;

          maps[newR][newC] = 0;
          queue.push([newR, newC]);
        }
      }

      steps += 1;
    }
    return -1;
  };

  return bfs([0, 0]);
}
