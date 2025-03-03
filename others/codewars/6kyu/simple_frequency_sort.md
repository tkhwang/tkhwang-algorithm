# Simple frequency sort

https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/javascript

## My solution

```js
function solve(arr){
  const freq = {}
  for (const num of arr) {
    freq.hasOwnProperty(num) ? freq[num] += 1 : freq[num] = 1
  }

  const keys = Object.keys(freq).map((v) => parseInt(v, 10))

  return [...arr]
      .sort((a,z) => freq[z] - freq[a] || a - z)
}
```

* 처음에는 아래와 같이 두 분 sorting 을 하였는데, fail 하는 case 가 발생함.
* 이보다는 sorting 조건에 `||` 해서 쓰는 걸로...

```js
  return [...arr]
      .sort((a,z) => a - z)
      .sort((a,z) => freq[z] - freq[a])
```
