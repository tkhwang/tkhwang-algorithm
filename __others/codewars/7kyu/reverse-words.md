# 7kyu : Reverse words

[Solutions: Hit Count | Codewars](https://www.codewars.com/kata/57b6f850a6fdc76523001162/solutions/solutions)

## My solution

```javascript
function reverseWords(string) {
  return string
    .split(" ")
    .map(word =>
      word
        .split("")
        .reverse()
        .join("")
    )
    .join(" ");
}
```

## Other solution

### Clever solution

```javascript
function reverseWords(str) {
  return str
    .split(" ")
    .map(function(word) {
      return word
        .split("")
        .reverse()
        .join("");
    })
    .join(" ");
}
```
