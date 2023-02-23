# 평균 구하기

[알고리즘 연습 - 평균 구하기 | 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript)

```
문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

제한사항
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
```

## My solution

```javascript
function solution(arr) {
  let sum = 0;
  arr.forEach((v, i) => {
    sum += v;
  });
  return sum / arr.length;
}
```

## Others

```javascript
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
```
