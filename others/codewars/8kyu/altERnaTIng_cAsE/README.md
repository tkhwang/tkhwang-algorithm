# altERnaTIng cAsE <=> ALTerNAtiNG CaSe

[Solutions: altERnaTIng cAsE <=> ALTerNAtiNG CaSe | Codewars](https://www.codewars.com/kata/56efc695740d30f963000557/solutions/python)

## My solution

```python
import string
def to_alternating_case(string):
    r = ""
    for ch in string:
        if ch.islower() :
            r += ch.upper()
        elif ch.isupper() :
            r += ch.lower()
        else:    
            r += ch
    return r
```

## Better other solutions

### good to understand

```python
def to_alternating_case(string):
    return string.swapcase()
```


### Clever    

```python
from string import swapcase as to_alternating_case
```

```python
def to_alternating_case(string):
    return ''.join([c.upper() if c.islower() else c.lower() for c in string])
```
