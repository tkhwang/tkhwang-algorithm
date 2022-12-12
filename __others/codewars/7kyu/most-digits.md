# 7kyu : Most digits

[Solutions: Most digits | Codewars](https://www.codewars.com/kata/most-digits/solutions?show-solutions=1)

`max()` 함수에서 `key` 통하여 판단 함수를 설정할 수 있음.

```python
def find_longest(xs):
    return max(xs, key=lambda x: len(str(x)))
```

