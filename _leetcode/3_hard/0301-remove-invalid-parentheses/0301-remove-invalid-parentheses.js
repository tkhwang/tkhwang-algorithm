/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  const N = s.length

  const isValid = (str) => {
    let left = 0
    let right = 0
    for (const [i, ch] of str.split("").entries()) {
      if (ch === "(") left += 1
      if (ch === ")") right += 1
      if (left < right) return false
    }
    return left === right
  }

  const res = []
  const set = new Set()
  const dfs = (remain, start) => {
    if (isValid(remain)) {
      if (!set.has(remain)) {
        set.add(remain)
        res.push(remain)
      }
      return
    }

    //   i-1, i, i+1
    //
    for (let i = start; i < remain.length; i += 1) {
      const cur = remain[i]
      if (cur === "(" || cur === ")") dfs(remain.slice(0, i) + remain.slice(i + 1), i)
    }
  }

  dfs(s, 0)

  res.sort((a, b) => b.length - a.length)
  const max = res[0].length

  return res.filter((v) => v.length === max)
}
