# Dash-Insert

[Coderbyte | Programming challenges and courses](https://coderbyte.com/results/cjordanball:Dash%20Insert:JavaScript)

## My solution

```javascript
function DashInsert(str) {
  return String(str)
    .split("")
    .map(function(v, i, str) {
      if (i > 0) {
        if (str[i - 1] % 2 === 1 && str[i] % 2 === 1) {
          return "-" + str[i];
        } else {
          return str[i];
        }
      } else {
        return v;
      }
    })
    .join("");
}
```

## Others

```javascript
function DashInsert(str) {
  let newString = str[0];

  for (let i = 1, lastOdd = str[0] % 2; i < str.length; i++) {
    if (str[i] % 2 === 1 && lastOdd === 1) {
      newString += "-" + str[i];
    } else {
      newString += str[i];
    }
    lastOdd = str[i] % 2;
  }
  return newString;
}
```

```javascript
function DashInsert(num) {
  var strnum = num.toString();
  var arr = strnum.split("");

  for (i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }

  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1) {
      arr.splice(i + 1, 0, "-");
    }
  }
  x = arr.join("");

  return x;
}
```
