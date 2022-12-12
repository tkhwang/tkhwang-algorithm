# Element Merger

## Others

```javascript
function ElementMerger(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    newArr = [];
    arr.forEach((val, ind) => {
      if (ind < arr.length - 1) {
        newArr.push(Math.abs(val - arr[ind + 1]));
      }
    });
    return ElementMerger(newArr);
  }
}
ElementMerger(readline());
```
