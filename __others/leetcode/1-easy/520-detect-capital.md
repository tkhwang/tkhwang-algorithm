## 520. Detect Capital

https://leetcode.com/problems/detect-capital/

## My Solution

```js
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const isAllUppercase = (word) => word === word.toUpperCase()
    const isAllLowercase = (word) => word === word.toLowerCase()
    const isFirstUpperAndRemainLower = (word) => {
        const first = word[0]
        const remains = word.slice(1)

        return first === first.toUpperCase() && remains === remains.toLowerCase()
    }

    return isAllUppercase(word) || isAllLowercase(word) || isFirstUpperAndRemainLower(word)
};
```

## Others solution

Same algorithm

```js
var detectCapitalUse = function(word) {
    return (word === word.toUpperCase() ||
            word === word.toLowerCase() ||
            word.charAt(0).toUpperCase() + word.substring(1).toLowerCase() === word);
};
```


```js
var detectCapitalUse = function(word) {
    return /^[A-Z]+$/.test(word) || /^[A-Z][a-z]+$/.test(word) || /^[a-z]+$/.test(word);
};
```
