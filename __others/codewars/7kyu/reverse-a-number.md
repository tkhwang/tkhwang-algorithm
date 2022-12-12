# 7kyu : Reverse a Number

[Solutions: Hit Count | Codewars](https://www.codewars.com/kata/57b6f850a6fdc76523001162/solutions/solutions)

## My solution

```javascript
```

## Other solution

### Clever solution

```javascript
function reverseNumber(n) {
  let isNegative = n < 0;
  let reverseAsString = Math.abs(n)
    .toString()
    .split("")
    .reverse()
    .join("");
  let result = Number(reverseAsString);

  return isNegative ? -result : result;
}
```

### Easy to understand

```javascript
function reverseNumber(n) {
  return (
    Math.sign(n) *
    Math.abs(n)
      .toString()
      .split("")
      .reverse()
      .join("")
  );
}
```
