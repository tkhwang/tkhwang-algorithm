# Get the Middle Character

## My solution

```js
function getMiddle(s) {
  const mid = Math.floor(s.length/2)

  if (s.length % 2 === 0) {
    return s.substr(mid-1, 2)
  } else {
    return s.substr(mid, 1)
  }
}
```
