# 7kyu : Build a square

[Solutions: Build a square | Codewars](https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/solutions/javascript)

## My solution

```javascript
function generateShape(number) {
  var msg = "";
  for (var i = 0; i < number; i++) {
    msg += "+".repeat(number);
    if (i != number - 1) {
      msg += "\n";
    }
  }
  return msg;
}
```

## Better other solutions

### Clever

기본은 비슷한데... 마지막 `\n` 을 없애기 위해서 무식하게 if 문 쓴 것을 `trim()` 으로 잘라내서 깔끔해졌네.

```javascript
function generateShape(n) {
  return ("+".repeat(n) + "\n").repeat(n).trim();
}
```

## TIL

```javascript
str.repeat(n);
str.trim();
```
