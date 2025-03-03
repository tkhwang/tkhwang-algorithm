# 7kyu : Sum of two lowest positive integers

[Solutions: Sum of two lowest positive integers | Codewars](https://www.codewars.com/kata/558fc85d8fd1938afb000014/solutions/javascript/me/best_practice)

## My solution

[javascript - Array.sort() doesn't sort numbers correctly - Stack Overflow](https://stackoverflow.com/questions/7000851/array-sort-doesnt-sort-numbers-correctly?noredirect=1&lq=1)

javascript 는 `str.sort()`가 alphabetical search 로서 numerical sort 가 아니라고 한다.

```javascript
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function(a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}
```

## Other solution

### Clever solution

numerical sort 하는 방법을 참조해서 그런지... solution 이 똑같네...

```javascript
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function(a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}
```
