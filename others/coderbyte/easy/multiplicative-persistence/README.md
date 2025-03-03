# Multiplicative Persistence

[Coderbyte | Programming challenges and courses](https://coderbyte.com/results/tkhwang:Multiplicative%20Persistence:JavaScript)

## My solution

```javascript
function MultiplicativePersistence(num) {
  function toDigit(num) {
    return String(num)
      .split("")
      .map(v => parseInt(v))
      .reduce((a, b) => a * b, 1);
  }

  let result = num;
  let count = 0;

  while (result > 9) {
    result = toDigit(result);
    count++;
  }

  return count;
}
```

## Others

#### Case #1

```javascript
function MultiplicativePersistence(num, per = 0) {
  if (String(num).length === 1) {
    return per;
  } else {
    m = String(num)
      .split("")
      .map(a => parseInt(a))
      .reduce((a, b) => a * b);
    per++;
    return MultiplicativePersistence(m, per);
  }
}
```
