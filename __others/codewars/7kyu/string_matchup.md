# 7kyu : String matchup

[Solutions: String matchup | Codewars](https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4/solutions/python)

## My solution

역시 코드는 생각대로 짤 수 밖에 없구나... 이게 `for` 문이 몇 개냐 ? 흑...

```python
def solve(a,b):
    n = [0] * len(b)
    for i, x in enumerate(a):
        for j, y in enumerate(b):
            if x == y:
                n[j] += 1
    return n
```

## Other solutions

### Clever

List comprehension matters !!!

```python
def solve(a,b):
    return [a.count(x) for x in b]
```


### Easy to understand

```python
def solve(a,b):
    return list(map(a.count, b))
```
