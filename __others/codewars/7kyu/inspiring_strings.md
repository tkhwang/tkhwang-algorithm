# 7kyu : Inspiring Strings

[Solutions: Inspiring Strings | Codewars](https://www.codewars.com/kata/5939ab6eed348a945f0007b2/solutions/python)

## My Solution

```python
def longest_word(words):
    words = words.split()
    words = words[::-1]
    print words
    l = map(lambda x:len(x), words)
    return words[l.index(max(l))]
```



## Other Solution


### Easy to understand

```python
def longest_word(string_of_words):
    words = string_of_words.split()[::-1]
    return max(words, key = len)
```


### Clever

```python
def longest_word(string_of_words):
    return max(reversed(string_of_words.split()), key=len)
```

