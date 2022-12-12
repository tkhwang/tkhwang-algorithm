# FizzBuzz

## My Solution

```javascript
function FizzBuzz(num) {
  let answer = "";

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer += "FizzBuzz" + " ";
    } else {
      if (i % 3 === 0) {
        answer += "Fizz" + " ";
      } else if (i % 5 === 0) {
        answer += "Buzz" + " ";
      } else {
        answer += i + " ";
      }
    }
  }

  return answer.trim();
}
```

## Others

- Space 처리를 array 사용하여 마지막에 `join(' ')`으로 대신 처리함.

```javascript
function FizzBuzz(num) {
  const returnArray = [];
  for (let i = 1; i <= num; i++) {
    if (!(i % 15)) {
      returnArray.push("FizzBuzz");
    } else if (!(i % 5)) {
      returnArray.push("Buzz");
    } else if (!(i % 3)) {
      returnArray.push("Fizz");
    } else {
      returnArray.push(i);
    }
  }
  return returnArray.join(" ");
}
```

```javascript
function FizzBuzz(num) {
	let result = '';
	for (let i = 1; i <= num; i += 1) {
		if (i % 3 === 0 && i % 5 === 0) {
			result += 'FizzBuzz';
		} else if (i % 3 === 0) {
			result += 'Fizz';
		} else if (i % 5 === 0) {
			result += 'Buzz';
		} else {
			result += i;
		}

		result += ' ';
	}
	return result;
```
