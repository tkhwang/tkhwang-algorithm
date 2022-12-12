# Isograms

## My Solution

```js
function isIsogram(str){
  const cache = {}
  for (const ch of str.toLowerCase().split('')) {
    if (cache.hasOwnProperty(ch)) return false
    else {
      cache[ch] = true
    }
  }
  return true
}
```

