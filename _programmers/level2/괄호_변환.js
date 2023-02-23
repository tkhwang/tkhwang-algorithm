// 괄호 변환
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/60058

function solution(p) {
  const isRight = (str) => {
    const stack = [];
    for (const ch of str) {
      if (ch === "(") {
        stack.push(ch);
      } else {
        const pop = stack.pop();
        if (pop !== "(") return false;
      }
    }
    return stack.length === 0;
  };

  const reverseStr = (str) => {
    const res = [];
    for (const ch of str) {
      if (ch === "(") res.push(")");
      else res.push("(");
    }
    return res;
  };

  const dfs = (str) => {
    if (!str) return str;
    if (isRight(str)) return str;

    let lefts = 0;
    let rights = 0;

    let first = -1;
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === "(") lefts += 1;
      if (str[i] === ")") rights += 1;

      if (lefts === rights) {
        first = i;
        break;
      }
    }
    let one = str.slice(0, first + 1);
    let two = str.slice(first + 1);

    if (isRight(one)) {
      return one + dfs(two);
    } else {
      let newString = "(" + dfs(two) + ")";
      const oneArr = one.split("");
      oneArr.shift();
      oneArr.pop();
      const newOne = reverseStr(oneArr);
      return newString + newOne.join("");
    }
  };

  return dfs(p);
}
