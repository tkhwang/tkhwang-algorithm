#

## Others

## My Solution

```javascript
function NextPalindrome(num) {
  let answer = undefined;

  for (let i = num; ; i++) {
    let str = String(i).split("");
    let str_rvr = String(i)
      .split("")
      .reverse();

    if (str.join("") === str_rvr.join("")) {
      return Number(i);
    }
  }
}
```

## Others

#### Case #1

```javascript
function isPalindrome(num) {
  var numStr = num.toString();
  return (
    numStr
      .split("")
      .reverse()
      .join("") === numStr
  );
}

function NextPalindrome(num) {
  var nextNum = num + 1;
  while (!isPalindrome(nextNum)) {
    nextNum++;
  }
  return nextNum;
}
```
