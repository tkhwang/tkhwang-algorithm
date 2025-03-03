# Second GreatLow

[Coderbyte | Programming challenges and courses](https://coderbyte.com/results/tkhwang:Second%20GreatLow:JavaScript)

# My solution

- Max 값 아닌 값으로 filter 걸어서 max 값을 제거한 후
- Max 값을 추출하여 2nd max 값을 추출하기.

```javascript
function SecondGreatLow(arr) {
  // Large
  let arr_wo_max = arr.filter((v, i) => v !== Math.max.apply(null, arr));
  let sec_larget = Math.max.apply(null, arr_wo_max);

  // Small
  let arr_wo_min = arr.filter((v, i) => v !== Math.min.apply(null, arr));
  let sec_smallest = Math.min.apply(null, arr_wo_min);

  return sec_smallest + " " + sec_larget;
}
```

## Others

```javascript
function SecondGreatLow(arr) {
  // code goes here
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });
  var greatest = sorted[sorted.length - 1];
  var lowest = sorted[0];
  var secondGreatest, secondLowest;

  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] !== lowest) {
      secondLowest = sorted[i];
      break;
    }
  }

  for (var i = sorted.length - 1; i >= 0; i--) {
    if (sorted[i] !== greatest) {
      secondGreatest = sorted[i];
      break;
    }
  }

  return secondLowest + " " + secondGreatest;
}
```
