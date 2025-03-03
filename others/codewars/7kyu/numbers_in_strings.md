# 7kyu : Numbers in strings

[Solutions: Numbers in strings | Codewars](https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/solutions/python)

## My solution

정규식으로 숫자를 찾은 후 `map()` 으로 integer 로 변경하여 max 값을 반환.

```python
import re
def solve(s):
    m = re.findall(r'\d+', s)
    m = map(int, m)
    return max(m)
```

## Other solution

### Clever solution

Logic 은 똑같네...

```python
import re

def solve(s):
    return max(map(int, re.findall(r'\d+', s)), default=0)
```
