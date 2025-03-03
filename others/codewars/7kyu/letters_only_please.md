# 7kyu : letters only, please!

[Solutions: letters only, please! | Codewars](https://www.codewars.com/kata/59be6bdc4f98a8a9c700007d/solutions/solutions)

## My solution

List comprehension 썼다...

```python
import string
def remove_chars(s):
    s = list(s)
    return "".join([x for x in s if any([str(x) in string.ascii_lowercase, str(x) in string.ascii_uppercase, str(x) == ' '])])
```


## Better other solutions

### Easy to undertand

Logic 은 같은데, 왜 훨씬 간단하지 ? ㅋㅋ
`str.isalpha()`, `str.isspace()`

```python
def remove_chars(s):
    return "".join( c for c in s if c.isalpha() or c==" " )

def remove_chars(s):
    return "".join(list(i for i in s if i.isalpha() or i.isspace()))
```

### Clever    

```python
import re

def remove_chars(s):
    return re.sub(r'[^a-zA-Z ]', '', s)
```
