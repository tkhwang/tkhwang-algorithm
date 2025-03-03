# Sort the odd

https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/javascript

## My solution

```js
function sortArray(array) {
  const evens = [...array].filter((v) => v % 2 === 0)
  const odds  = [...array].filter((v) => v % 2 === 1).sort((a,z) => a - z)

  const result = []
  let index = 0
  for (let i = 0; i < array.length; i += 1) {
    // even
    if (array[i] % 2 === 0) {
      result.push(array[i])
    // odd
    } else {
      result.push(odds[index])
      index += 1
    }
  }
  return result
}
```

## Other solution


```js
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}
```

