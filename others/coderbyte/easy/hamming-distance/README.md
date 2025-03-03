# Hamming Distance

[Coderbyte | Programming challenges and courses](https://coderbyte.com/results/tkhwang:Hamming%20Distance:JavaScript)

## My Solution

```javascript
function HammingDistance(strArr) {
  let count = 0;

  for (let i = 0; i < strArr[0].length; i++) {
    if (strArr[0][i] !== strArr[1][i]) {
      count++;
    }
  }

  return count;
}
```

## Others

```javascript
function HammingDistance(strArr) {
  let count = 0;
  for (let i = 0; i < strArr[0].length; i++) {
    if (strArr[0][i] !== strArr[1][i]) {
      count++;
    }
  }
  return count;
}
```
