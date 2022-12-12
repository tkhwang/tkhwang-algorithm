# 자릿수 더하기

[알고리즘 연습 - 자릿수 더하기 | 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript)

```
문제 설명
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

제한사항
N의 범위 : 100,000,000 이하의 자연수
```

## My solution

```javascript
function solution(n) {
  let temp = ("" + n).split("");
  let sum = 0;
  for (let a of temp) {
    sum += parseInt(a);
  }
  return sum;
}
```

## Others

```javascript
function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, cur) => acc + +cur, 0);
}
```
