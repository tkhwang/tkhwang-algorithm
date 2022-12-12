# Nonrepeating Character

## My Solution

- `new RegExp(조건식, "g")`

```javascript
function NonrepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.match(new RegExp(str[i], "g")).length === 1) {
      return str[i];
    }
  }
}
```

## Others

#### Case #1

```javascript
function NonrepeatingCharacter(str) {
  let len = str.length;
  let countObj = {};

  for (let i = 0; i < len; i++) {
    if (countObj[str[i]]) {
      countObj[str[i]]++;
    } else {
      countObj[str[i]] = 1;
    }
  }

  for (let j = 0; j < len; j++) {
    if (countObj[str[j]] === 1) return str[j];
  }
}
```

#### Case #2

```javascript
function NonrepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let regex = new RegExp(str[i], "g");
    if ((str.match(regex) || []).length === 1) {
      return str[i];
    }
  }
  return false;
}
```
