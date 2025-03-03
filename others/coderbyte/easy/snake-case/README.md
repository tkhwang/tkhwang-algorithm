# Snake Case

## My solution

```javascript
function SnakeCase(str) {
  const regexp = /[^a-zA-Z]/g;
  let words = str.split(regexp);

  return words.map(v => v.toLowerCase()).join("_");
}
```

## Others

### Case #1

```javascript
function SnakeCase(str) {
  return str
    .split(/[^a-zA-Z]/)
    .map(val => {
      return val.toLowerCase();
    })
    .join("_");
}
```

### Case #2

```javascript
function SnakeCase(str) {
  const LETTERS = "abcdefghijklmnopqrstuvwxyz";

  return str
    .split("")
    .map(function(char) {
      char = char.toLowerCase();
      return LETTERS.includes(char) ? char : "_";
    })
    .join("");
}
```
