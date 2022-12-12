# 문자열 내 p 와 y 의 개수

[알고리즘 연습 - 문자열 내 p 와 y 의 개수 | 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript)

```
문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.

제한사항
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.
```

## My solution

```javascript
function solution(str) {
  let count_p = -1;
  let count_y = -1;
  let s = str.toLowerCase();

  for (let ch of s) {
    if (ch === "p") {
      count_p += 1;
    } else if (ch === "y") {
      count_y += 1;
    }
  }

  if (count_p === -1 && count_y === -1) {
    return true;
  } else {
    return count_p === count_y;
  }
}
```

## Others

```javascript
function solution(s) {
  const p = s.split("").filter(v => ["p", "P"].includes(v));
  const y = s.split("").filter(v => ["y", "Y"].includes(v));
  return p.length === y.length;
}
```

```javascript
function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
```
