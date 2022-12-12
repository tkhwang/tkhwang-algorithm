# 7kyu : Are the numbers in order?

[Solutions: Are the numbers in order? | Codewars](https://www.codewars.com/kata/56b7f2f3f18876033f000307/solutions/javascript)

## My solution

```javascript
function inAscOrder(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i+1] < arr[i]) {
      return false;
    }
  }
  return true;
```

## Other solution

### Easy to understand

### Clever solution

```javascript
function inAscOrder(arr) {
  return arr.every((_, i) => i == 0 || arr[i] > arr[i - 1]);
}
```

```javascript
const inAscOrder = a =>
  a
    .slice()
    .sort((x, y) => x - y)
    .every((e, i) => e === a[i]);
```
