# Word Count

[Coderbyte | Programming challenges and courses](https://coderbyte.com/results/tkhwang:Word%20Count:JavaScript)

## My solution

```javascript
function WordCount(str) {
  // code goes here
  return str.split(" ").length;
}

// keep this function call here
WordCount(readline());
```

## Others

```javascript
function WordCount(str) {
  var arr = str.split(" ");
  var answer = arr.length;

  return answer;
}
```
