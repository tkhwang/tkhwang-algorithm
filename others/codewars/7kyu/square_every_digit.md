# Square Every Digit

## My Solution

```js
function squareDigits(num){
  const arrNum = String(num).split('')
  let result = ''
  for (const num of arrNum) {
    result += '' + (num * num)
  }

  return parseInt(result, 10)
}
```

## Other solution

```js
function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
  });

  return parseInt(array.join(""));
}
```
