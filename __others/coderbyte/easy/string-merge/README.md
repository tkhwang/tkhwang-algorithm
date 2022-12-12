# String Merge

## My Solution

```javascript
function StringMerge(str) {
  let inputs = str.split("*");
  let output = [];

  let temp = inputs.map(v => v.split(""));
  for (let i = 0; i < temp[0].length; i++) {
    output.push(temp[0][i]);
    output.push(temp[1][i]);
  }

  return output.join("");
}
```

## Others

```javascript
function StringMerge(str) {
  let newString = "";
  let len = (str.length - 1) / 2;
  let arr = str.split("*");

  for (let i = 0; i < len; i++) {
    newString += arr[0][i] + arr[1][i];
  }
  return newString;
}
```

```javascript
function StringMerge(str) {
  let pair = str.split("*");

  let string = "";

  for (let i = 0; i < pair[0].length; i++) {
    string += pair[0][i] + pair[1][i];
  }

  return string;
}
```
