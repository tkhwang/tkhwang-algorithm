# [6 kyu] Which are in?  @ 2016/12/11

[Kata Stats: Which are in? | Codewars](https://www.codewars.com/kata/550554fd08b86f84fe000a58)

## My Solution

- `set(list)` 로 중복없는 `set` 구성
- `sorted(list)` 로 정렬

```python
def in_array(array1, array2):
    result = []
    for s2 in array2:
        for s1 in array1:
            if s1 in s2:
                result.append(s1)
    return sorted(set(result))
```

## Better other solutions

우아.. 이번에는 best practice 랑 거의 동일하다.
`sort` 해서 변수에 넣고 나서 `retur` 하는 거랑 `return` 에서 바로 계산하는 거랑 다른가 ?

```python
def in_array(array1, array2):
    res = []
    for a1 in array1:
        for a2 in array2:
            if a1 in a2 and not a1 in res:
                res.append(a1)
    res.sort()
    return res
```

