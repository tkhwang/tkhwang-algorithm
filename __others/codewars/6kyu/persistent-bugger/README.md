# [6kyu] Persistent Bugger.

[Kata Stats: Persistent Bugger. | Codewars](https://www.codewars.com/kata/persistent-bugger/javascript)

## My solution

```javascript
function persistence(num) {
  let numArr = String(num).split("");
  let count = 0;
  if (numArr.length === 1) return 0;

  while (numArr.length > 1) {
    num = numArr.map(v => Number(v)).reduce((a, b) => a * b, 1);
    numArr = String(num).split("");
    count += 1;
  }

  return count;
}
```

## Others

```javascript
function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}
```
