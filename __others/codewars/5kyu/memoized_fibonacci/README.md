# [5 kyu] Memoized Fibonacci @ 2016.12.17

[Solutions: Memoized Fibonacci | Codewars](https://www.codewars.com/kata/529adbf7533b761c560004e5/solutions/python)

## My Solution

Memorized Fibonacci라... 처음 알게되었군요...

```python
cache = {}
def fibonacci(n):
    if n in cache:
        return cache[n]
    else:
        cache[n] = n if n < 2 else fibonacci(n - 1) + fibonacci(n - 2)
        return cache[n]
```

## Better other solutions

오잉... 이건 뭔가 사기 같은데...

```python
from functools import lru_cache

@lru_cache(None)
def fibonacci(n):
    if n in [0, 1]:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
```    

```python
memo = {}

def fibonacci(n):
    if n in [0, 1]:
        return n
    if n not in memo:
        memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
    return memo[n]
```

