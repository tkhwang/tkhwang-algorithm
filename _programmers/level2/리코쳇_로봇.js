// 리코쳇 로봇
// level2
// https://school.programmers.co.kr/learn/courses/30/lessons/169199

function solution(board) {
  const [ROWS, COLS] = [board.length, board[0].length];

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const isValid = (r, c) => {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return false;
    if (board[r][c] === "D") return false;
    return true;
  };
  const genKey = (r, c) => `${r}:${c}`;

  let res = -1;

  const seen = new Array(ROWS).fill(null).map((_) =>
    Array(COLS)
      .fill(null)
      .map((_) => Array(4).fill(false))
  );
  const UP = 0;
  const DOWN = 1;
  const LEFT = 2;
  const RIGHT = 3;

  const delta2index = (dR, dC) => {
    if (dR === 0 && dC === 1) return UP;
    if (dR === 0 && dC === -1) return DOWN;
    if (dR === 1 && dC === 0) return RIGHT;
    if (dR === -1 && dC === 0) return LEFT;
  };

  const bfs = (initR, initC, seen) => {
    const queue = [[initR, initC]];
    let steps = 0;

    while (queue.length) {
      const len = queue.length;

      for (let i = 0; i < len; i += 1) {
        const [r, c] = queue.shift();

        if (board[r][c] === "G") return steps;

        for (const [dR, dC] of directions) {
          const index = delta2index(dR, dC);
          let newR = r + dR;
          let newC = c + dC;

          if (!isValid(newR, newC)) continue;
          if (seen[newR][newC][index]) continue;

          seen[newR][newC][index] = true;
          while (isValid(newR, newC)) {
            newR += dR;
            newC += dC;
          }
          newR -= dR;
          newC -= dC;
          queue.push([newR, newC]);
        }
      }

      steps += 1;
    }
    return -1;
  };

  for (let r = 0; r < ROWS; r += 1) {
    for (let c = 0; c < COLS; c += 1) {
      if (board[r][c] !== "R") continue;

      return bfs(r, c, seen);
    }
  }

  return res;
}
