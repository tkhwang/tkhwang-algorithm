# ASCII Conversion

## My solution

```javascript
function ASCIIConversion(str) {
  return str
    .split("")
    .map(v => (v === " " ? v : v.charCodeAt()))
    .join("");
}
```

## Others

```javascript
function ASCIIConversion(str) {
  return str
    .split("")
    .map(char => (char === " " ? " " : char.charCodeAt(0)))
    .join("");
}
```

```javascript
function ASCIIConversion(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code !== 32) {
      result += code;
    } else {
      result += " ";
    }
  }
  return result;
}
```

```javascript
function ASCIIConversion(str) {
  let myArr = str
    .split(" ")
    .map(val => {
      return val
        .split("")
        .map(val2 => {
          return val2.charCodeAt(0);
        })
        .join("");
    })
    .join(" ");
  return myArr;
}
```
