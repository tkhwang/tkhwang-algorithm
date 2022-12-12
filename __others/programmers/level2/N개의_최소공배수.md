# N개의 최소공배수

https://programmers.co.kr/learn/courses/30/lessons/12953


## My solution

* 공배수 수학 의미 그대로 적용함.
* 효율적이지 못함.

```js
function solution(arr) {
    if (arr.includes(1)) {
        const index = arr.indexOf(1)
        arr.splice(index, 1)
    }
    const min = Math.min(...arr)
    const product = arr.reduce((a,b) => a * b, 1)

    for (let i = min; i <= product; i += 1) {
        if (arr.every((v) => i % v === 0)) return i
    }
    return -1
}
```

## Others solution

* 아래 내용은 숙지해두면 효율적으로 풀이 가능함.

```js
function nlcm(num) {
 return num.reduce((a,b) => a*b / gcd(a,b))
}

function gcd(a, b) {
  return a % b ? gcd(b, a%b) : b
}
```
