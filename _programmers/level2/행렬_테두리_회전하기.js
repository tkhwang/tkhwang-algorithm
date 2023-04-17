// 행렬 테두리 회전하기
// level2
// https://school.programmers.co.kr/learn/courses/30/lessons/77485

function solution(rows, columns, queries) {
  const [ROWS, COLS] = [rows, columns];

  const array = Array(ROWS)
    .fill(null)
    .map((_) => Array(COLS).fill(0));
  let value = 1;
  for (let r = 0; r < ROWS; r += 1) {
    for (let c = 0; c < COLS; c += 1) {
      array[r][c] = value;
      value += 1;
    }
  }

  const res = [];
  for (let [startR, startC, endR, endC] of queries) {
    startR -= 1;
    startC -= 1;
    endR -= 1;
    endC -= 1;
    let min = Infinity;

    // 왼쪽 row
    const temp = array[startR][startC];

    for (let r = startR; r <= endR - 1; r += 1) {
      array[r][startC] = array[r + 1][startC];
      if (min > array[r][startC]) min = array[r][startC];
    }
    // 하단 column
    for (let c = startC; c <= endC - 1; c += 1) {
      array[endR][c] = array[endR][c + 1];
      if (min > array[endR][c]) min = array[endR][c];
    }
    // 오른쪽 Row
    for (let r = endR; r >= startR + 1; r -= 1) {
      array[r][endC] = array[r - 1][endC];
      if (min > array[r][endC]) min = array[r][endC];
    }
    // 상단 column
    for (let c = endC; c >= startC + 1; c -= 1) {
      array[startR][c] = c === startC + 1 ? temp : array[startR][c - 1];
      if (min > array[startR][c]) min = array[startR][c];
    }
    res.push(min);
  }

  return res;
}
