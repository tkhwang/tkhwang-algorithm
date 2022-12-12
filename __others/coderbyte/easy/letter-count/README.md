# Letter Count I

## My Solution

```javascript
function LetterCountI(str) {
  let output = {};
  let words = str.split(" ");

  words.forEach(function(word) {
    output[word] = {};
    let temp = word.split("");
    temp.forEach(function(el) {
      if (output[word].hasOwnProperty(el)) {
        output[word][el]++;
      } else {
        output[word][el] = 1;
      }
    });
  });

  let key = {};
  words.forEach(function(word) {
    key[word] = Object.keys(output[word]);
    key[word].sort((a, b) => output[word][b] - output[word][a]);
  });

  let max = 1;
  let answer = "";
  words.forEach(function(word) {
    if (max < output[word][key[word][0]]) {
      max = output[word][key[word][0]];
      answer = word;
    }
  });

  return answer === "" ? "-1" : answer;
}
```

## Others

- 대단하다....

```javascript
function LetterCountI(str) {
  const arr = str.split(" ");
  const letterCount = arr.map(item => {
    const store = {};
    item.split("").forEach(letter => {
      store[letter] = store[letter] + 1 || 1;
    });
    return Object.keys(store)
      .map(key => store[key])
      .sort((a, b) => a - b)
      .pop();
  });

  if (Math.max(...letterCount) === 1) {
    return -1;
  }
  return arr[letterCount.indexOf(Math.max(...letterCount))];
}
```
