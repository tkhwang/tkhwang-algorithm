// 주식가격
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices) {
  const N = prices.length

  const stack = []
  const res = Array(N)

  for (let i = N - 1; i >= 0; i -= 1) {
    res[i] = N - 1 - i
  }

  for (const [i, num] of prices.entries()) {
    while (stack.length > 0 && stack.at(-1)[1] > num) {
      const [lastIndex, lastNum] = stack.pop()
      res[lastIndex] = i - lastIndex
    }
    stack.push([i, num])
  }

  return res
}
