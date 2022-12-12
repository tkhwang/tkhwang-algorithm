# 6kyu : Counting Duplicates

[Solutions: Counting Duplicates | Codewars](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/solutions/solutions)

## My solution

```python
def duplicate_count(text):
    text = text.lower()
    c_set = list(set(text))
    cnt = 0
    for ch in c_set:
        if text.count(ch) > 1:
            cnt += 1
    return cnt
```

## Other solution

```python
from collections import Counter

def duplicate_count(text):
    return sum(1 for c, n in Counter(text.lower()).iteritems() if n > 1)
```
