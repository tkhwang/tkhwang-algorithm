// [카카오 인턴] 경주로 건설
// Level 3
// https://school.programmers.co.kr/learn/courses/30/lessons/67259

function solution(board) {
  const [ROWS, COLS] = [board.length, board[0].length];

  const UP = 0;
  const DOWN = 1;
  const LEFT = 2;
  const RIGHT = 3;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);

  const getNextDirectonAndCost = (r, c, newR, newC, direction) => {
    if (r === newR) {
      return c < newC
        ? [RIGHT, direction === RIGHT ? 100 : 600]
        : [LEFT, direction === LEFT ? 100 : 600];
    }
    if (c === newC) {
      return r < newR
        ? [DOWN, direction === DOWN ? 100 : 600]
        : [UP, direction === UP ? 100 : 600];
    }
  };

  let min = Infinity;

  const bfs = ([initR, initC, initCost, initDirection]) => {
    // 처음에는 단순하게 `set` 으로 `seen/visited` 처리 하였으나 시간초과 발생
    // 이후에 cost 가 싼 경우에만 방문하도록 graph[r][c] 이용함.
    const graph = Array(ROWS)
      .fill(null)
      .map((_) => Array(COLS).fill(Infinity));
    graph[0][0] = 0;
    const queue = [[initR, initC, initCost, initDirection]];

    while (queue.length) {
      const len = queue.length;

      for (let i = 0; i < len; i += 1) {
        const [r, c, cost, direction] = queue.shift();

        // 처음에 여기에서 return 하였는데, BFS 로 최초 도착하는 경우만 minimum 이 아닐 수 있으므로
        // backtrack 으로 다른 경우에 탐색도 가능하도록 return 하지 않고, 최후에 minimum 값으로
        // update된 graph[ROWS - 1][COLS  - 1] 값을 마지막에 return 하도록 수정함.
        //
        // if (r === ROWS - 1 && c === COLS - 1) {
        //   return graph[ROWS - 1][COLS - 1];
        // }

        for (const [dR, dC] of directions) {
          const newR = r + dR;
          const newC = c + dC;

          if (!isValid(newR, newC)) continue;
          if (board[newR][newC] !== 0) continue;

          const [nextDirection, nextCost] = getNextDirectonAndCost(
            r,
            c,
            newR,
            newC,
            direction
          );
          if (graph[newR][newC] < cost + nextCost) continue;

          graph[newR][newC] = cost + nextCost;
          queue.push([newR, newC, cost + nextCost, nextDirection]);
        }
      }
    }
    // 최종 여기서 update된 minimum 값을 return 하도록 수정함.
    return graph[ROWS - 1][COLS - 1];
  };

  return Math.min(bfs([0, 0, 0, DOWN]), bfs([0, 0, 0, RIGHT]));
}
