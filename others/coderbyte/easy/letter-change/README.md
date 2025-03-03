# Letter Changes

[Coderbyte | Programming challenges and courses](https://coderbyte.com/results/tkhwang:Letter%20Changes:JavaScript)

## My solution

```javascript
function LetterChanges(str) {
  // a -> b
  // 모음은 capitalize

  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYW";
  const LOWER = UPPER.toLowerCase();
  const VOWEL = "aeiou";

  let tmp = str
    .split("")
    .map((v, i, a) => {
      if (UPPER.includes(v) || LOWER.includes(v)) {
        let ascii = v.charCodeAt();
        let ch = String.fromCharCode(ascii + 1);

        if (ch < "Z" && ch < "a") {
          ch = String.fromCharCode(ascii + 1 - 65);
        } else if (ch > "z") {
          ch = String.fromCharCode(ascii + 1 - 65);
        }
        return ch;
      } else {
        return v;
      }
    })
    .join("");

  return tmp
    .split("")
    .map(v => (VOWEL.includes(v) ? v.toUpperCase() : v))
    .join("");
}
```

## Others

#### Case #1

- 무조건 `.map()` 만 있는 것이 아니라 `.replace()` + 정규식도 사용 가능.

```javascript
function LetterChanges(str) {
  str = str.replace(/[a-zA-Z]/g, function(ch) {
    if (ch === "z") return "a";
    else if (ch === "Z") return "A";
    else return String.fromCharCode(ch.charCodeAt(0) + 1);
  });

  return str.replace(/[aeiou]/g, function(ch) {
    return ch.toUpperCase();
  });
}
```

#### Case #2

```javascript
function LetterChanges(str) {
  str = str.trim().toLowerCase();
  var len = str.length;
  var newStr = "";

  for (var i = 0; i < len; i++) {
    if (/[a-ce-gi-mo-su-y]/.test(str[i])) {
      newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 97);
    } else if (/[zdhnt]/.test(str[i])) {
      newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 65);
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
```
