# Palindrome

[Coderbyte | Programming challenges and courses](https://coderbyte.com/results/tkhwang:Palindrome:JavaScript)

## My solution

- `"dont nod"`와 같이 중간에 space 가 있는 경우에는 무시하여 처리함.

```javascript
function Palindrome(str) {
  // code goes here
  return str.split("").every(function(v, i, array) {
    return (
      // space character
      array[i] === " " ||
      array[array.length - 1 - i] === " " ||
      // main logic
      array[i] === array[array.length - 1 - i]
    );
  });
}

// keep this function call here
Palindrome(readline());
```

## Others

`reverse()` 하여 바로 비교하여 끝 ? ㅋㅋ

```javascript
function Palindrome(str) {
  let s1 = str.split(" ").join("");
  let s2 = s1
    .split("")
    .reverse()
    .join("");
  return s1 === s2 ? true : false;
}
```

```javascript
function Palindrome(str) {
  modified = str.replace(/W/g, "");

  var arr1 = modified.split("");
  var arr2 = arr1;
  arr2 = arr2.reverse();
  str2 = arr2.join("");

  return modified == str2;
}
```
