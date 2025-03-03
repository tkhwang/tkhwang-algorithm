# Sum of positive

https://www.codewars.com/kata/5715eaedb436cf5606000381/javascript

## My Solution

```js
function positiveSum(arr) {
  return arr.filter(v=>v>0).reduce((a,b)=>a+b,0)
}
```
