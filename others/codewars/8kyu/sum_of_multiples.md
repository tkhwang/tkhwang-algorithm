# 8kyu : Sum of Multiples

[Solutions: Sum of Multiples | Codewars](https://www.codewars.com/kata/57241e0f440cd279b5000829/solutions/python)

## My Solution

```python
def sum_mul(n, m):
    r = 0
    if m < 1 or n < 1 :
        return 'INVALID'
    for i in range(m):
        if i % n == 0:
            r += i
    return r
```


## Other solution

### Clever

List comprehension 은 언제나...

```python
def sum_mul(n, m):
    return sum(x for x in range(n, m, n)) if m > 0 and n > 0 else 'INVALID'
```
