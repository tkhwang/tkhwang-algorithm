// 시저 암호
// level1
// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  const getIndex = (ch, base = null) => {
    const index = ch.charCodeAt(0);

    return base ? index - base.charCodeAt(0) : index;
  };
  const getCh = (index) => String.fromCharCode(index);

  let res = "";

  for (const ch of s) {
    if (ch === " ") res += ch;
    else if ("A" <= ch && ch <= "Z") {
      const offset = getIndex(ch, "A");
      const updated = (offset + n) % 26;
      res += String.fromCharCode("A".charCodeAt(0) + updated);
    } else if ("a" <= ch && ch <= "z") {
      const offset = getIndex(ch, "a");
      const updated = (offset + n) % 26;
      res += String.fromCharCode("a".charCodeAt(0) + updated);
    }
  }

  return res;
}
