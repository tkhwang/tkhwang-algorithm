# check-nums

[Coderbyte | Programming challenges and courses](https://coderbyte.com/results/cjordanball:Check%20Nums:JavaScript)

## My solution

```javascript
function CheckNums(num1, num2) {
  // code goes here
  if (num1 == num2) {
    return -1;
  } else if (num2 > num1) {
    return true;
  } else {
    return false;
  }
}

// keep this function call here
CheckNums(readline());
```

## Others

`true` or `false`를 `num2 > num1`으로 판단해서 한 번에 실행시킨다.

```javascript
function CheckNums(num1, num2) {
  if (num1 == num2) {
    return "-1";
  } else {
    return num2 > num1;
  }
}
```
