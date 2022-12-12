# Number Addition

## My solution

- 정규식으로 숫자가 아닌 것으로 `split()` 함.

```javascript
function NumberAddition(str) {
  const regexp = /[^0-9]/g;
  let nums = str.split(regexp);

  let sum = 0;
  return nums.map(v => Number(v)).reduce((a, b) => a + b);
}
```

## Others

#### Case #1

```javascript
function NumberAddition(str) {
  let numbers = str.match(/[0-9]+/g);
  let n = 0;
  for (let i = 0; i < numbers.length; i++) {
    n += parseInt(numbers[i]);
  }
  return n;
}
```

#### Case #2

- 정규식으로 `\d+` 으로 `match()` 로 찾음.

```javascript
function NumberAddition(str) {
  var numbers = str.match(/\d+/g) || [];
  return numbers.reduce(function(sum, number) {
    return sum + Number(number);
  }, 0);
}
```
