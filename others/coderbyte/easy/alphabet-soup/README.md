# Alphabet Soup

## My solution

```javascript
function AlphabetSoup(str) {
  // code goes here
  return str
    .split(" ")
    .map(word =>
      word
        .split("")
        .sort(function(a, b) {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        })
        .join("")
    )
    .join(" ");
}
// keep this function call here
AlphabetSoup(readline());
```

## Others

뭐야.. 그냥 `sort().join('')` 하면 되는거쟎아... 쩝...

```javascript
function AlphabetSoup(str) {
  let letters = str.split("");
  return letters.sort().join("");
}
```
