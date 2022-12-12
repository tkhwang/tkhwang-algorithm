# 7kyu : Counting Array Elements

[Solutions: Counting Array Elements | Codewars](https://www.codewars.com/kata/5569b10074fe4a6715000054/solutions/python)

## My solution

```python
def count(array):
    st = set(array)
    r = {}
    for i, s in enumerate(st):
        r[s] = array.count(s)
    return r
```

### Clever

```python
from collections import Counter

def count(array): 
    return Counter(array)
```

