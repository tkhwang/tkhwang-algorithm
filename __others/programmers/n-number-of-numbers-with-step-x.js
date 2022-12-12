// My Solution
function solution(x, n) {
  const result = [];
  let temp = x;

  while (result.length !== n) {
    result.push(temp);
    temp += x;
  }

  return result;
}

// Other
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
