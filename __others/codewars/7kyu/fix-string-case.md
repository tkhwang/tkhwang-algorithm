# Fix string case

[Solutions: Fix string case | Codewars](https://www.codewars.com/kata/5b180e9fedaa564a7000009a/solutions/javascript/me/best_practice)

## My solution

```javascript
function solve(s) {
  let lower = 0,
    upper = 0;
  for (const ch of s) {
    if ("a" <= ch && ch <= "z") lower += 1;
    else if ("A" <= ch && ch <= "Z") upper += 1;
  }

  return upper > lower ? s.toUpperCase() : s.toLowerCase();
}
```

## Others

#### Clever

```javascript
const solve = s => (s.replace(/[A-Z]/g, "").length < s.length / 2 ? s.toUpperCase() : s.toLowerCase());
```
