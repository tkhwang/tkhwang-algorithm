# Palindrome Two

## My solution

#### 1st Try

```javascript
function PalindromeTwo(str) {
  // A war at Tarawa!
  let words = str
    .toLowerCase()
    .replace(/[*\-,!\s]/g, "")
    .split(" ");
  let org = words.join("");
  let rvs = words.reverse().join("");

  console.log(org, rvs);
  return org === rvs;
}
```

#### 2nd Try

```javascript
function PalindromeTwo(str) {
  let trimmedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let reversedStr = trimmedStr
    .split("")
    .reverse()
    .join("");

  return trimmedStr === reversedStr;
}
```

## Others

#### Case #1

```javascript
function PalindromeTwo(str) {
  const LETTERS = "abcdefghijklmnopqrstuvwxyz";

  let forward = str
    .split("")
    .map(c => c.toLowerCase())
    .filter(c => LETTERS.includes(c));

  return forward.join("") === forward.reverse().join("");
}
```

#### Case #2

```javascript
function PalindromeTwo(str) {
  var trimmedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  var reverseStr = trimmedStr
    .split("")
    .reverse()
    .join("");

  return trimmedStr === reverseStr;
}
```
