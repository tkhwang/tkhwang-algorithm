# Changing Sequence

[Coderbyte | Programming challenges and courses](https://coderbyte.com/results/tkhwang:Changing%20Sequence:JavaScript)

## My solution

```javascript
function ChangingSequence(arr) {
  let delta = arr.map((v, i, arr) => {
    if (i > 0) {
      return arr[i] - arr[i - 1];
    } else {
      return 0;
    }
  });

  for (let i = 0; i < delta.length; i++) {
    if (i > 1) {
      // different sign
      if (Math.sign(delta[i - 1]) !== Math.sign(delta[i])) {
        return i - 1;
        // same sign
      }
    }
  }
  return -1;
}
```

## OThers

#### Case #1

```javascript
function ChangingSequence(arr) {
  if (arr.length < 2) return -1;
  var increasing = arr[0] < arr[1];

  for (var i = 1; i < arr.length - 1; i++) {
    if (increasing) {
      if (arr[i] > arr[i + 1]) return i;
    } else {
      if (arr[i] < arr[i + 1]) return i;
    }
  }

  return -1;
}
```
