# 8kyu : String cleaning

[Solutions: Returning Strings | Codewars](http://www.codewars.com/kata/55a70521798b14d4750000a4/solutions/javascript)

## Solution

```javascript
var util = require('util');

function greet(name){
  var msg = util.format("Hello, %s how are you doing today?", name);
  return msg;
}
```

## Other solutions

`${argument}` 로 하면 되는구나...

```javascript
function greet(name){
  return `Hello, ${name} how are you doing today?`;
}
```

