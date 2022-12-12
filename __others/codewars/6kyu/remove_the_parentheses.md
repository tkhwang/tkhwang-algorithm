# Remove the parentheses

https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/javascript

## My solution

```js
function removeParentheses(s){
  const result = []
  let isInParen = 0
  for (const ch of s) {
    if (ch === "(") isInParen += 1
    else if (ch === ")") isInParen -= 1
    else if (!isInParen) result.push(ch)
  }
  return result.join('')
}
```

## Other solution

```js
function removeParentheses(s){
  let r = 0
  let x = ''
  for (let c of s) {
    if (c=='(') r++
    if (r==0) x+=c
    if (c==')') r--
  }
  return x
}
```
