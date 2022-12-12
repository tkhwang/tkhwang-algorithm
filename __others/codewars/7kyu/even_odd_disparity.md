# 7kyu : Even odd disparity

[Solutions: Even odd disparity | Codewars](https://www.codewars.com/kata/59c62f1bdcc40560a2000060/solutions/python)

## My solution

```python
def solve(a):
    odd = 0
    even = 0
    for i in a:
        if str(i).isdigit():
            if i %2 == 0:
                even += 1
            else:    
                odd += 1
        else:
            continue
    return (even - odd)
```

## Other solutions

### Clever


```python
def solve(a):
    return sum(1 if v % 2 == 0 else -1 for v in a if type(v) == int)
```




