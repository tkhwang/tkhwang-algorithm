# 7kyu : Sum a list but ignore any duplicates

[Solutions: Sum a list but ignore any duplicates | Codewars](https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/solutions/python)

## My solution

```python
def sum_no_duplicates(l):
    return sum([x for x in l if l.count(x) == 1])
```

## Other solutions

### Clever

```python
from collections import Counter

def sum_no_duplicates(nums):
    return sum(k for k, v in Counter(nums).items() if v == 1)
```
