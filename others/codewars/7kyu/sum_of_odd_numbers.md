# 7kyu : Sum of odd numbers

[Solutions: Sum of odd numbers | Codewars](https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/solutions/python/all/best_practice)

## My solution

```python
def row_sum_odd_numbers(n):
    n = int(n)
    n = n - 1
    return sum(range(n**2+n+1, n**2+n+1+2*n+1,2))
```

## Other solutions

### Clever

뭐라고 ? 이건 맞다고 해도 좀 그렇다... ㅋㅋ

```python
def row_sum_odd_numbers(n):
    #your code here
    return n ** 3
```
