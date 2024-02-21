function solution(_s) {
  const N = _s.length
  const s = _s.split("")

  const obj = {
    ")": "(",
    "]": "[",
    "}": "{",
  }

  const isValid = (arr) => {
    const stack = []
    for (const ch of arr) {
      if (Object.values(obj).includes(ch)) {
        stack.push(ch)
      } else {
        const pop = stack.pop()
        if (pop !== obj[ch]) return false
      }
    }
    return stack.length === 0
  }

  let res = 0

  for (let i = 0; i < N; i += 1) {
    if (isValid(s)) res += 1

    const pop = s.shift()
    s.push(pop)
  }

  return res
}
