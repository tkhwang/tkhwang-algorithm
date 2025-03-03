# 7kyu : Who's online ?

[Solutions: Who's Online? | Codewars](https://www.codewars.com/kata/5b6375f707a2664ada00002a/solutions/javascript)

## My solution

```javascript
const whosOnline = (friends) => {
  let obj = {};
  friends.forEach(friend=>{
      if(friend.status !== 'offline' && friend.lastActivity > 10){
        obj['away'] ? '' : obj['away'] = [];
        obj['away'].push(friend.username);
      }
      else {
        obj[friend.status] ? '' : obj[friend.status] = [];
        obj[friend.status].push(friend.username);
      }
  });

  return obj;
}
```

## Better other solutions

### Clever    

```javascript
const whosOnline = friends =>
    [['online',  friend => friend.status === 'online' && friend.lastActivity <= 10],
     ['away',    friend => friend.status === 'online' && friend.lastActivity >  10],
     ['offline', friend => friend.status === 'offline']]
    .map(([status, func]) => [status, friends.filter(func)
    .map(friend => friend.username)])
    .reduce((result, [status, array]) => {
        if (array.length) result[status] = array;
        return result;
    }, {});
```
