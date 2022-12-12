# 8kyu : Exclamation marks series #1: Remove a exclamation mark from the end of string

[Solutions: Exclamation marks series #1: Remove a exclamation mark from the end of string | Codewars](https://www.codewars.com/kata/57fae964d80daa229d000126/solutions/python)

## My Solution

```python
import re
def remove(str):
    return re.sub('!$', "", str)
```


## Other Solution

### Clever 

`str.endswith("X")`

```python
def remove(s):
    return s[:-1] if s.endswith('!') else s
```