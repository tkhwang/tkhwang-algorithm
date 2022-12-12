# Prime time

[Coderbyte | Programming challenges and courses](https://coderbyte.com/results/tkhwang:Prime%20Time:JavaScript)

## My solution

```javascript
function PrimeTime(num) {
  let divisor = 2;

  while (divisor < num) {
    if (num % divisor === 0) return false;
    divisor++;
  }
  return true;
}
```

## Others

#### Case #1

- Prime number check 는 `num/2` 까지만 하면 되는가 ?

```javascript
function PrimeTime(num) {
  for (let i = 2, max = num / 2; i < max; i++) {
    if (num % i === 0) {
      // divisible!  not prime
      return false;
    }
  }
  return true;
}
```

#### Case #2

```javascript
function PrimeTime(num) {
  var hinge = Math.floor(Math.sqrt(num));
  var i = 2;
  var test = true;

  //hardcode correct answers for 1 and 2
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  }
  //run a loop to see if the number has any integral factors (aside from 1)
  else {
    while (i <= hinge && test === true) {
      if (num % i !== 0) {
        i++;
      } else {
        test = false;
      }
    }
    return test;
  }
}
```
