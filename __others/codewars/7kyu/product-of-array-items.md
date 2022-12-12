# Product of Array Items : 7kyu

[Solutions: Product of Array Items | Codewars](https://www.codewars.com/kata/5901f361927288d961000013/solutions/javascript)

## My solution

```javascript
function product(values) {
  console.log(values);

  if (Array.isArray(values) && values.length) {
    return values.reduce((a, b) => a * b, 1);
  } else {
    return null;
  }
}
```

## Others

```javascript
function product(values) {
  if (values === null || values.length === 0) return null;
  return values.reduce((acc, cur) => acc * cur, 1);
}
```
