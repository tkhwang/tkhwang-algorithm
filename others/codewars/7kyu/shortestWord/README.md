# [7 kyu] Shortest Word

[Kata Stats: Shortest Word | Codewars](https://www.codewars.com/kata/shortest-word/python)

```
Description:

x Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
```


## My Solution

```python
def find_short(words):
    # your code here
    words = words.split(' ')
    length = 0
    smallest = words[0]
    result = ''
    for word in words:
        length = len(word)
        if length < smallest:
            smallest = length
    return smallest
```

## Better other solutions

아... **list comprehension**을 좀 잘 써야겠다... T_T;

```python
def find_short(s):
    return min([len(x) for x in s.split()])
```


