# Swap case

[Coderbyte | Programming challenges and courses](https://coderbyte.com/results/tkhwang:Swap%20Case:JavaScript)

## My solution

- Ascii code 값 얻기 : `STR.charCodeAt(#)`
- 반대 : `fromCharCode()`

```javascript
function SwapCase(str) {
  var answer = "";
  for (let i = 0; i < str.length; i++) {
    // Upper case
    if (
      "A".charCodeAt() <= str[i].charCodeAt() &&
      str[i].charCodeAt() <= "Z".charCodeAt()
    ) {
      answer += str[i].toLowerCase();
    }
    // Lower case
    else if (
      "a".charCodeAt() <= str[i].charCodeAt() &&
      str[i].charCodeAt() <= "z".charCodeAt()
    ) {
      answer += str[i].toUpperCase();
      // etc
    } else {
      answer += str[i];
    }
  }

  return answer;
}
```

## Others

#### Case #1

- 나는 하나하나 ascii code 값을 비교해서 upper, lower case 인지를 판단했는데, 이 친구는 현재 값과 `.toUpperCase()` 한 값을 비교하여 같으면 uppercase 로 판단.
- `.toLowerCase()` 하면 동일하면 현재 lowercase 로 판단.

```javascript
function SwapCase(str) {
  arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    } else if (arr[i] == arr[i].toLowerCase()) {
      arr[i] = arr[i].toUpperCase();
    }
  }
  str = arr.join("");
  return str;
}
```

#### Case #2

```javascript
function SwapCase(str) {
  const LOWER = "abcdefghijklmnopqrstuvwxyz";
  const UPPER = "ABCDEFGHIJKLMNOPWRSTUVWXYZ";

  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (LOWER.includes(str[i])) {
      newString += str[i].toUpperCase();
    } else if (UPPER.includes(str[i])) {
      newString += str[i].toLowerCase();
    } else {
      newString += str[i];
    }
  }
  return newString;
}
```
