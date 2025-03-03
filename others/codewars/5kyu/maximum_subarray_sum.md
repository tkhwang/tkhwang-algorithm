# Maximum subarray sum

https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

## My solution

```js
var maxSequence = function(arr){
  var max = 0;
  var cur = 0;
  arr.forEach(function(i){
    cur = Math.max(0, cur + i);
    max = Math.max(max, cur);
  });
  return max;
}
```





