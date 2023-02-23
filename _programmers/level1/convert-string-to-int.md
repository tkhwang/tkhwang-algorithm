# 문자열을 정수로 바꾸기

[알고리즘 연습 - 문자열을 정수로 바꾸기 | 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12925?language=javascript)

```
문제 설명
문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

제한 조건
s의 길이는 1 이상 5이하입니다.
s의 맨앞에는 부호(+, -)가 올 수 있습니다.
s는 부호와 숫자로만 이루어져있습니다.
s는 0으로 시작하지 않습니다.
입출력 예
예를들어 str이 1234이면 1234를 반환하고, -1234이면 -1234를 반환하면 됩니다.
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.
```

## My solution

```javascript
function solution(s) {
  return Number(s);
}
```

## Others

```javascript
function strToInt(str) {
  return +str;
}

function strToInt(str) {
  return str / 1;
}
```

## TIL

#### Convert number to string

```javascript
return "" + 1;
```
