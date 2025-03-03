# Powers of Two

[Coderbyte | Programming challenges and courses](https://coderbyte.com/results/tkhwang:Powers%20of%20Two:JavaScript)

## My solution

```javascript
function PowersofTwo(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  return PowersofTwo(num / 2);
}
```

## Others

#### Case #1

```javascript
function PowersofTwo(num) {
  // code goes here
  if (num === 1) return true;
  else {
    return num % 2 === 0 ? PowersofTwo(num / 2) : false;
  }
}
```

#### Case #2

- 수학 지식 이용

```javascript
function PowersofTwo(num) {
  return Number.isInteger(Math.log(num) / Math.log(2)) ? true : false;
}
```
