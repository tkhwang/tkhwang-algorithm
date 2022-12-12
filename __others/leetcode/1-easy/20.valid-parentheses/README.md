# 20. Valid Parentheses

https://leetcode.com/problems/valid-parentheses/

## My Solution

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const PAREN = {
		')': '(',
		'}': '{',
		']': '[',
	}
	const stack = []

	for (const ch of s.split('')) {
		if (Object.values(PAREN).includes(ch)) stack.push(ch)
		else if (Object.keys(PAREN).includes(ch)) {
			const pop = stack.pop()
			if (pop !== PAREN[ch]) return false
		}
	}
	return stack.length === 0
}
```

```typescript
function isValid(s: string): boolean {
	const PAREN: { [key: string]: string } = {
		')': '(',
		'}': '{',
		']': '[',
	}
	const stack: string[] = []

	for (const ch of s.split('')) {
		if (Object.values(PAREN).includes(ch)) stack.push(ch)
		else if (Object.keys(PAREN).includes(ch)) {
			const pop = stack.pop()
			if (pop !== PAREN[ch]) return false
		}
	}
	return stack.length === 0
}
```

## Others solution

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const stack = []
	const keys = {
		'(': ')',
		'{': '}',
		'[': ']',
	}
	for (const ch of s) {
		if (ch in keys) {
			stack.push(keys[ch])
		} else {
			if (stack.length === 0 || stack.pop() !== ch) {
				return false
			}
		}
	}
	return stack.length === 0
}
```
