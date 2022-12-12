# [5 kyu] Valid Parentheses @ 2016.12.27

[Solutions: Valid Parentheses | Codewars](https://www.codewars.com/kata/52774a314c2333f0a7000688/solutions/python)

## My Solution


```python
import string
def valid_parentheses(msg):
    str = ''
    for s in msg:
        if s not in ( string.ascii_lowercase or string.ascii_uppercase ) :
            str += s
    while '{}' in str or '()' in str or '[]' in str:
        str = str.replace('{}', '')
        str = str.replace('[]', '')
        str = str.replace('()', '')
    return str == ''
```

## Better other solutions

```python
def valid_parentheses(string):
    cnt = 0
    for char in string:
        if char == '(': cnt += 1
        if char == ')': cnt -= 1
        if cnt < 0: return False
    return True if cnt == 0 else False
```
