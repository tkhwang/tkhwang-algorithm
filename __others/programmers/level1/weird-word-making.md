# 이상한 문자 만들기

[알고리즘 연습 - 이상한 문자 만들기 | 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript)

```
문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
```

## My solution

```javascript
function solution(s) {
  return s
    .split(" ")
    .map(w =>
      w
        .split("")
        .map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase()))
        .join("")
    )
    .join(" ");
}
```

## Others

```javascript
function solution(s) {
  let check = s.split(" "); // word
  let ans = [];
  let val = null;

  for (let elem of check) {
    val = elem.split(""); // character
    for (let i = 0; i < val.length; i++) {
      if (i % 2 == 0) {
        val[i] = val[i].toUpperCase();
      } else {
        val[i] = val[i].toLowerCase();
      }
    }
    ans.push(val.join(""));
  }
  return ans.join(" ");
}
```
