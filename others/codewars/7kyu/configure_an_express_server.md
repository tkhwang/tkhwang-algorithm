# 7kyu : Configure an express server

https://www.codewars.com/kata/5696c8b5fddc42058b000032/solutions/javascript

## My solution

```javascript
const solution = () => {
  var express = require('express');
  var app = express();
  
  app.listen(process.env.PORT, process.env.HOST, () => { });
};
```

## Other solutions

### Easier to understand


```javascript
const solution = () => {
  const express = require('express');
  const app = express();
  
  app.listen(process.env.PORT, process.env.HOST, () => { 
    console.log("Your Express app is up and running! \n");
    console.log( "Listening on port " + process.env.PORT + " and host " + process.env.HOST);
  });
};
```
