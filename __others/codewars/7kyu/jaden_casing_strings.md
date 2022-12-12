# 7kyu : Jaden Casing Strings


## My solution

```python
def toJadenCase(string):
    r = ""
    for i, ch in enumerate(string):
        if i == 0:
            r += ch.upper()
        else:
            if string[i-1] == " ":
                r += ch.upper()
            else:        
                r += ch
    return r
```


## Other solutions

### Easy to understand

```python
import string

def toJadenCase(NonJadenStrings):
    return string.capwords(NonJadenStrings)
```


### Clever solution

```python
from string import capwords as toJadenCase
```


```python
def toJadenCase(string):        
    return " ".join(w.capitalize() for w in string.split())
```


