# 7kyu : Sequence to 1

[Solutions: Sequence to 1 | Codewars](https://www.codewars.com/kata/5a05fe8a06d5b6208e00010b/solutions/python)

## My solution

```python
def seq_to_one(n):
    if n > 0:
        return list(range(n, 0, -1))
    else:
        return list(range(n, 2, 1))
```

## Better other solutions

### Clever

```python
def seq_to_one(n):
    step = (-1)**(n>=1)
    return list(range(n, 1+step, step))
```
