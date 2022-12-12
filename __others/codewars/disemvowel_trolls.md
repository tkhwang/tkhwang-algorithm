# Disemvowel Trolls

## My solution

```js
function disemvowel(str) {
  return str.split("").filter((v) => !['a','A','e','E','i','I','o','O','u','U'].includes(v)).join('')
}
```

## Others solution

```js
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
```
