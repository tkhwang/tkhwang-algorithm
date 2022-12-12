# [7 kyu] Mumbling @ 2017.01.01

[Solutions: Mumbling | Codewars](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions/python)

## My Solution


```python
def accum(str):
    result = []
    for i, s in enumerate(str):
        result.append(s.upper() + s.lower() * i)
    return "-".join(result)
```

## Better other solutions

### clever

앞으로 for 문은 list comrehension 으로 작성해보자…

```python
def accum(s):
    return '-'.join(c.upper() + c.lower() * i for i, c in enumerate(s))
```

