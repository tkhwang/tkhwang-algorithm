## valid palindrome

https://leetcode.com/problems/valid-palindrome/


## My solution

#### `array.reverse()` 사용

```js
/**
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789"
    const cleanedS = s
        .toLowerCase()
        .split('')
        .filter((ch) => alphaNumeric.includes(ch))
        .join('')
    const revertedS = cleanedS.split('').reverse().join('')

    return cleanedS === revertedS
};
```

## Compare head and end

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const validCh = s
        .replace(/[^a-z0-9]/gi,"")
        .toLowerCase()

    let head = 0,
        end = validCh.length - 1

    while (head < end) {
        if (validCh[head] !== validCh[end]) return false
        head += 1
        end -= 1
    }
    return true
};
```
