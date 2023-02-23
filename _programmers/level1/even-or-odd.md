## 짝수와 홀수

[알고리즘 연습 - 짝수와 홀수 | 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12937)

## My solution

```javascript
function solution(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
```

## Other Solution

#### Easy to understand

```javascript
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));
```
