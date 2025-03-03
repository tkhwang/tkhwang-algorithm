# 6kyu : Case Reversal of Consecutive Duplicates


## Other solution

```python
import re

def reverse(s):
    return re.sub(r'(.)\1+', lambda m: m.group().swapcase(), s)
```
