# [6 kyu] Nested List Depth @ 2017.01.08


[Solutions: Nested List Depth | Codewars](https://www.codewars.com/kata/56b3b9c7a6df24cf8c00000e/solutions/python)

## My Solution


```python
import re
def list_depth(l):
    regex = re.compile(r'\[|]')
    mo = regex.findall(str(l))
    depth = 0
    max = 0
    for i, m in enumerate(mo):
        if m == '[' :
            depth += 1
            if max <= depth :
                max = depth
        if m == ']' :
            depth -= 1
    return max
```

## Better other solutions


### clever

```python
def list_depth(l):
    depths = [1]
    for x in l:
        if isinstance(x, list):
            depths.append(list_depth(x) + 1)
    return max(depths)
```
