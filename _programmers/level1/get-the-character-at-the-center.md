# 가운데 글자 가져오기

[알고리즘 연습 - 가운데 글자 가져오기 | 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript)

```
제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

재한사항
s는 길이가 1 이상, 100이하인 스트링입니다.
```

## My solution

```javascript
function solution(s) {
  let mid = 0;
  let even = false;

  if (s.length % 2 === 0) {
    even = true;
  }

  mid = parseInt(s.length / 2);

  if (even) {
    return s[mid - 1] + s[mid];
  } else {
    return s[mid];
  }
}
```

## Others

```javascript
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
```

## TIL

- 반올림 : `Math.round(number)`
- 올림 : `Math.ceil(number);`
- 버림 : `Math.floor(number)`
