# Find the odd int

https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript

## My solution

```js
function findOdd(A) {
  const freq = {}
  for (const num of A) {
    freq.hasOwnProperty(num) ? freq[num] += 1 : freq[num] = 1
  }

  const keys = Object.keys(freq)
  const keyOddAppearing = keys.map((v) => parseInt(v, 10)).filter((v) => freq[v] % 2 === 1)[0]

  return keyOddAppearing
}
```


## Other solution

```js
function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });

  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}
```
