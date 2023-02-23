# 두 정수 사이의 합

[알고리즘 연습 - 두 정수 사이의 합 | 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12912)

```
문제 설명
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.
```

## My solution

```javascript
function solution(a, b) {
  let tmp = 0;
  if (a > b) {
    tmp = a;
    a = b;
    b = tmp;
  }
  let answer = 0;
  for (let i = a; i < b + 1; i++) {
    answer += i;
  }
  return answer;
}
```

## Others

```javascript
/ 문제가 개편 되었습니다. 이로 인해 함수 구성이 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function adder(a, b){

    return (a+b)*(Math.abs(b-a)+1)/2;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )
```
