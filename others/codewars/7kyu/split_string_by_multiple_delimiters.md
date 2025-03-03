# 7kyu : Split string by multiple delimiters



## Other solution

```python
def multiple_split(string, delimiters=[]):
    for d in delimiters:
        string = string.replace(d, '###')
    return [s for s in string.split('###') if s]
```

    

```python
from re import split, escape

def multiple_split(string, delimiters=[]):
    return filter(None, split('|'.join(map(escape, delimiters)), string))
```

