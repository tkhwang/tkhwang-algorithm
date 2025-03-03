# [6 kyu] Reversed Words

[Solutions: Reversed Words | Codewars](https://www.codewars.com/kata/51c8991dee245d7ddf00000e/solutions/python)

## My Solution

```python
def reverseWords(str):
    str = str.split()
    r = ""
    for s in str[::-1]:
        r += s + ' '
    return r[:-1]
```

## Better other solutions

```python
def reverseWords(str):
    return ' '.join(reversed(str.split(' ')))
```

