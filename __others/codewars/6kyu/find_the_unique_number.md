# Find the unique number

https://www.codewars.com/kata/585d7d5adb20cf33cb000235/javascript

## My solution

```js
function findUniq(arr) {
  for (const num of arr) {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) return num
  }
  return -1
}

```
