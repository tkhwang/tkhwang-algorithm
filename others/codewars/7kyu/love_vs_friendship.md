# 7kyu : Love vs friendship

[Solutions: Love vs friendship | Codewars](https://www.codewars.com/kata/59706036f6e5d1e22d000016/solutions/python)

## My solution

```python
import string

def words_to_marks(items):
    TABLE = "#" + string.ascii_lowercase
    r = 0
    for item in items:
        r += int(TABLE.index(item))
    return r
```

## Other solutions

### Clever

사실 의미는 이거랑 같지 뭐... ㅋㅋ

```python
def words_to_marks(s):
    return sum('_abcdefghijklmnopqrstuvwxyz'.index(e) for e in s)
```
