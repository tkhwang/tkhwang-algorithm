# Camel Case

## My Solution

```javascript
function CamelCase(str) {
  // Cleaning white space
  let words = str.split(/[^a-zA-Z]/g);

  words = words
    .map(w =>
      w
        .split("")
        .map((v, i) => (i === 0 ? v.toUpperCase() : v.toLowerCase()))
        .join("")
    )
    .join("");

  return words
    .split("")
    .map((v, i) => (i === 0 ? v.toLowerCase() : v))
    .join("");
}
```

## Others

```javascript
function CamelCase(str) {
  // take out words first
  var words = str.match(/\w+/g);
  // capitalize each starting letter and lowercase for the rest
  var camelized = words
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join("");
  // change the first letter to lowercase
  return camelized[0].toLowerCase() + camelized.slice(1);
}
```
