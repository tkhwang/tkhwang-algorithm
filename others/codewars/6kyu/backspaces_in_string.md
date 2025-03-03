# Backspaces in string

https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

## My solution

```js
function cleanString(s) {
  const stack = []
  for (const ch of s) {
    if (ch === "#") stack.pop()
    else stack.push(ch)
  }
  return stack.join("")
}
```
