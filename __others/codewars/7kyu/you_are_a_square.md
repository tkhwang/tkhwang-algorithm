# You're a square!

## My solution

```js
var isSquare = function(n){
  const isInteger = (num) => {
    return num === Math.floor(num)
  }

  return isInteger(Math.sqrt(n))
}
```

## Others solution

* `Number.isInteger()` method 가 있었구나

```js
const isSquare = n => Number.isInteger(Math.sqrt(n));
```

```js
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
```
