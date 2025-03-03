# 7kyu : Find the missing element between two arrays

[Solutions: Find the missing element between two arrays | Codewars](https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/solutions/javascript)

## My solution

```javascript
function findMissing(arr1, arr2) {
  arr1.sort();
  arr2.sort();

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return arr1[i];
    }
  }
}
```

## Other solution

### Easy to understand

```javascript
function findMissing(arr1, arr2) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr1.reduce(reducer, 0) - arr2.reduce(reducer, 0);
}
```
