# H Distance

## My Solution

```javascript
function HDistance(strArr) {
  let distance = 0;

  for (let i = 0; i < strArr[0].length; i++) {
    if (strArr[0][i] !== strArr[1][i]) {
      distance++;
    }
  }

  return distance;
}
```

## Others

```javascript
function HDistance(strArr) {
  const string1 = strArr[0];
  const string2 = strArr[1];
  const len = string1.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (string1[i] !== string2[i]) {
      count += 1;
    }
  }
  return count;
}
```
