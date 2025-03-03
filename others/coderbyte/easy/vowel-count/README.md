# Vowel Count

## My solution

```javascript
function VowelCount(str) {
  const regexp = /[aeiou]/g;

  return str.toLowerCase().match(regexp).length;
}
```

case incentive option 사용 추가.

```javascript
function VowelCount(str) {
  const regexp = /[aeiou]/gi;

  return str.match(regexp).length;
}
```

## Others

#### Case #1

- `/[aeiou]/gi` 에서 case incentive option 사용하기.
- null 일 때 `return 0` 하기.

```javascript
function VowelCount(str) {
  var patt = /[aeiou]/gi;

  var arr = str.match(patt);

  if (arr == null) {
    return 0;
  } else {
    return arr.length;
  }
}
```

#### Case #2

정규식 없이 for-문으로만...

```javascript
function VowelCount(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
```
