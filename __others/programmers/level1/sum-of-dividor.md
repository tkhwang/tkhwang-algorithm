# 약수의 합

[알고리즘 연습 - 약수의 합 | 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12928)

```
문제 설명
자연수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 사항
n은 0 이상 3000이하인 자연수입니다.
```

# My solution

```javascript
function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++ ) {
      if ( n % i === 0 ) {
          answer.push(i);
      }
  }
  let sum = 0;
  answer.map((v,i) => sum += v );

  return sum;
```

## Others

```javascript
function solution(n) {
  return Array(n)
    .fill()
    .map((v, i) => i + 1)
    .reduce((a, c) => (n % c ? a : a + c), 0);
}
```

```javascript
let sumDivisor = num => {
  let answer = 0,
    i = 1,
    j = num % 2 == 0 ? 1 : 2;

  for (i; i < num; i = i + j) if (num % i == 0) answer += i;

  return answer + num;
};
```
