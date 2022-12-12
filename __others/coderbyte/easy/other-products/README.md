# Other Products

## Solution

```javascript
function OtherProducts(arr) {
  let holdArray = [];

  arr.forEach((val, ind, theArray) => {
    newArray = Array.from(theArray);
    newArray.splice(ind, 1);

    holdArray[ind] = newArray.reduce((val1, val2) => val1 * val2);
  });

  return holdArray.join("-");
}
```
