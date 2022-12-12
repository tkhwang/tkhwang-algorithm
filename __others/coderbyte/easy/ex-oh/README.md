# ExOh

## My Solution

`str.filter('ch')`로 해당 캐릭터만 추출하여 `.length` 계산하기.

```javascript
function ExOh(str) {
  // code goes here
  // let num_x = str.length - str.split("x").join("").length;
  // let num_o = str.length - str.split("o").join("").length;

  let num_x = str.split("").filter(c => c === "x").length;
  let num_o = str.split("").filter(c => c === "o").length;

  return num_x === num_o;
}

// keep this function call here
ExOh(readline());
```

## Others

#### Easy to understand

```javascript
function ExOh(str) {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      xCount++;
    }
    if (str[i] === "o") {
      oCount++;
    }
  }

  return xCount === oCount ? true : false;
}
```

`filter()` 사용한 솔루션.

```javascript
function ExOh(str) {
  // code goes here
  var letters = str.split("");

  var numOfEx = letters.filter(function(ch) {
    return ch === "x";
  }).length;
  var numOfOh = letters.filter(function(ch) {
    return ch === "o";
  }).length;

  return numOfEx === numOfOh;
}
```

#### Clever

```javascript
function ExOh(str) {
  var regExPatternX = /x/gi;
  var regExPatternO = /o/gi;

  var arrayXLen =
    str && str.match(regExPatternX) ? str.match(regExPatternX).length : 0;
  var arrayOLen =
    str && str.match(regExPatternO) ? str.match(regExPatternO).length : 0;

  return arrayXLen === arrayOLen;
}
```
