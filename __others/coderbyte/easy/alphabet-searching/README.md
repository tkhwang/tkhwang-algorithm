# Alphabet Searching

## My solution

```javascript
function AlphabetSearching(str) {
  const ALPHA = "abcdefghijklmnopqrstuvwxyz";
  let chs = str.replace(/[^a-zA-Z]/g, "").split("");

  for (let i = 0; i < ALPHA.length; i++) {
    if (!chs.includes(ALPHA[i])) {
      return false;
    }
  }
  return true;
}
```

## Others

#### Case #1

```javascript
function AlphabetSearching(str) {
  const LOWER_LETTERS = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < LOWER_LETTERS.length; i++) {
    if (!str.includes(LOWER_LETTERS[i])) {
      return false;
    }
  }
  return true;
}
```

#### Case #2

```javascript
function AlphabetSearching(str) {
  str = str.toLowerCase();
  for (let i = 97; i < 97 + 26; i++) {
    let char = String.fromCharCode(i);
    if (!str.includes(char)) {
      return false;
    }
  }
  return true;
}
```
