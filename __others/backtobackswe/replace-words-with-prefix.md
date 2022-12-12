# Replace Words With Prefix

https://backtobackswe.com/platform/content/replace-words-with-prefix

## My solution

```js
const replaceWordsWithPrefix = (prefixes, sentence) => {
  const output = []
  prefixes.sort((a,z) => z.length - a.length)
  for (const word of sentence.split(" ")) {
    let thisWord = ''
    for (const prefix of prefixes) {
      if (word.startsWith(prefix)) {
        thisWord = word.replace(word, prefix)
      }
    }
    thisWord = (thisWord !== '') ? thisWord : word
    output.push(thisWord)
  }

  return output.join(" ")
}
```
