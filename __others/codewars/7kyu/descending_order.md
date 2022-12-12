# Descending Order

https://www.codewars.com/kata/5467e4d82edf8bbf40000155/javascript

## My solution

```js
function descendingOrder(n){
  return parseInt(String(n).split("").sort((a,z) => z - a).join(''), 10)
}
```
