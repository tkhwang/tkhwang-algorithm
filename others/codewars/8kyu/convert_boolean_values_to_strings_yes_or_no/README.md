# 8 kyu : Convert boolean values to strings 'Yes' or 'No'.

https://www.codewars.com/kata/53369039d7ab3ac506000467/solutions/javascript

## My solution

```javascript
function boolToWord( bool ){
  if (bool == true) return 'Yes';
  if (bool == false) return 'No';
}
```


## Others

```javascript
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}
```