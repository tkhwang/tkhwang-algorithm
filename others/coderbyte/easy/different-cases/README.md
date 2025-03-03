# Different Cases

## My solution

```javascript
function DifferentCases(str) {
  let words = str.split(/[^a-zA-Z]+/g);

  return words
    .map(v =>
      v
        .split("")
        .map((v, i) => (i === 0 ? v.toUpperCase() : v.toLowerCase()))
        .join("")
    )
    .join("");
}
```

## Others

```javascript
function DifferentCases(str) {
  const charTest = /[a-zA-Z]/;
  let returnString = "";
  const len = str.length;
  const baseString = str.toLowerCase();

  for (let i = 0; i < len; i++) {
    if (i === len - 1 && !charTest.test(baseString[i])) {
      return returnString;
    }
    if (i === 0 && charTest.test(baseString[i])) {
      returnString += baseString[i].toUpperCase();
      continue;
    }
    if (baseString[i - 1] && charTest.test(baseString[i])) {
      if (!charTest.test(baseString[i - 1])) {
        returnString += baseString[i].toUpperCase();
      } else {
        returnString += baseString[i];
      }
    }
  }
  return returnString;
}
```
