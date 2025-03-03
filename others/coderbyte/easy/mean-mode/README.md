# Mean Mode

[Coderbyte | Programming challenges and courses](https://coderbyte.com/results/tkhwang:Mean%20Mode:JavaScript)

## My solution

```javascript
function MeanMode(arr) {
  let sum = 0;
  let mean = 0;
  let mode = {};

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // mode 최빈값
    if (mode.hasOwnProperty(arr[i])) {
      mode[arr[i]]++;
    } else {
      mode[arr[i]] = 1;
    }
  }
  mean = sum / arr.length;

  // Find the largest mode.
  let keys = Object.keys(mode);
  mode = Number(keys.sort((a, b) => mode[b] - mode[a])[0]);

  return mean === mode ? 1 : 0;
}
```

## Others

#### Case #1

```javascript
function MeanMode(arr) {
  let mean = 0;
  for (let i = 0; i < arr.length; i++) {
    mean += arr[i];
  }
  mean /= arr.length;

  let mode = arr[Math.floor(arr.length / 2)];
  return mean === mode ? 1 : 0;
}
```

#### Case #2

- Mean 을 `reduce()` 를 이용 : array 이용해야 하므로 argument 는 `...` 전개연산자 이용.

```javascript
function calcMean(...args) {
  return args.reduce((memo, item) => memo + item) / args.length;
}

function MeanMode(arr) {
  const mode =
    arr.length % 2 === 0
      ? calcMean(arr[arr.length / 2], arr[arr.length / 2 + 1])
      : arr[Math.floor(arr.length / 2)];
  const mean = calcMean(...arr);

  return mean === mode ? 1 : 0;
}
```

#### Case #3

- 기존 알고리즘은 내가 작성한 것과 비슷한 것 같은데, 코드는 많이 simple 하지만 읽기는 매우 어렵다. 뭐가 좋은 걸까 ?

```javascript
function MeanMode(arr) {
  var mean = arr.reduce((a, b) => a + b) / arr.length,
    mode = {},
    res = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    mode[arr[i]] = mode[arr[i]] ? mode[arr[i]] + 1 : 1;
  }

  for (key in mode) {
    res.push([mode[key], key]);
  }

  return Number(res.sort((a, b) => b[0] - a[0])[0][1]) === mean ? 1 : 0;
}
```
