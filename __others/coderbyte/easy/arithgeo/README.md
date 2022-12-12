# Arith Geo

[Coderbyte | Programming challenges and courses](https://www.coderbyte.com/results/tkhwang:Arith%20Geo:JavaScript)

# My Solution

- 마지막에 arithmetic, geometric 처리를 위한 array 에 넣은 다음에 다시 `reduce()` 로 동일 값으로 줄이는 작업이 nice 하지 않다.

```javascript
function ArithGeo(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < 2) continue;
    else {
      if (arr[i] - arr[i - 1] === arr[i - 1] - arr[i - 2]) {
        answer.push("Arithmetic");
      } else if (arr[i] / arr[i - 1] === arr[i - 1] / arr[i - 2]) {
        answer.push("Geometric");
      } else {
        return "-1";
      }
    }
  }

  return answer
    .map(
      (v, i, answer) =>
        answer[i] === "Arithmetic"
          ? "Arithmetic"
          : answer[i] === "Geometric"
            ? "Geometric"
            : "-1"
    )
    .reduce((p, c) => (p !== c ? "-1" : c));
}
```

## Others

- index 2 에 대한 처리.

```javascript
function ArithGeo(arr) {

    let arithmetic = true;
    // test arithmetic
    for (let i = 2, diff = arr[1] - arr[0]; i < arr.length; i++) {
        if (arr[i] - arr[i-1] !== diff) {
            arithmetic = false;
        }
    }

    if (arithmetic) {
        return 'Arithmetic';
    }

    let geometric = true;
    // geometric
    for (let i = 2, divisor = arr[1] / arr[0]; i < arr.length; i++) {
        if (arr[i] / arr[i-1] !== divisor) {
            geometric = false;
        }
    }

    if (geometric) {
        return 'Geometric';
    }

    return -1;
```

```javascript
function ArithGeo(arr) {
  if (arr.length < 2) {
    return -1;
  }
  let a = arr[1] - arr[0];
  let g = arr[1] / arr[0];
  let aAnswers = [];
  let gAnswers = [];
  for (let i = 1; i < arr.length - 1; i++) {
    arr[i + 1] - arr[i] === a ? aAnswers.push(true) : aAnswers.push(false);
    arr[i + 1] / arr[i] === g ? gAnswers.push(true) : gAnswers.push(false);
  }
  if (aAnswers.includes(false) === false) {
    return "Arithmetic";
  } else if (gAnswers.includes(false) === false) {
    return "Geometric";
  } else {
    return -1;
  }
}
```

```javascript
function ArithGeo(arr) {
  var len = arr.length;
  var arithK = arr[1] - arr[0];
  var geoK = arr[1] / arr[0];

  for (var i = 0; i < len - 1; i++) {
    if (arr[i + 1] - arr[i] !== arithK) {
      break;
    } else if (i === len - 2) {
      return "Arithmetic";
    }
  }

  for (var i = 0; i < len - 1; i++) {
    if (arr[i + 1] / arr[i] !== geoK) {
      break;
    } else if (i === len - 2) {
      return "Geometric";
    }
  }

  return -1;
}
```
