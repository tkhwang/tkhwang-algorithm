# Third Greatest

[Coderbyte | Programming challenges and courses](https://coderbyte.com/results/cjordanball:Third%20Greatest:JavaScript)

## My solution

- array 의 value 값으로 key, 이 length 를 value 로 하는 새로운 object 를 만들어서
- 이 object 의 value 값으로 sort 하여 구함.
- 하지만, 아래 others solution 에서는 array sort 를 직접 value length 를 이용하여 하는 것이 간단함.

```javascript
function ThirdGreatest(strArr) {
  let output = {};

  strArr.forEach(word => {
    output[word] = word.length;
  });

  let keys = Object.keys(output);
  keys.sort((a, b) => output[b] - output[a]);

  return keys[2];
}
```

## Others

#### Case #1

- Array `sort()` 시에 방법을 새로운 함수로 작성함으로써 명명할 수 있음.
  - `Array.sort()`

```javascript
function ThirdGreatest(strArr) {
  strArr.sort(function(a, b) {
    return b.length - a.length;
  });
  return strArr[2];
}
```
