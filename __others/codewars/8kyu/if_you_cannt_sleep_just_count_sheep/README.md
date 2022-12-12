# 8kyu : If you can't sleep, just count sheep!!

https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/solutions/javascript

## My solution

```javascript
var countSheep = function (num){
  var msg = "";
  for( var i=1 ; i<= num ; i++ ) {
    msg += i 
    msg += " sheep...";
  }
  return msg;
}
```


## Other solution

### Easy to understand

```javascript
var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}
```


### Clever

```javascript
countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``
```


