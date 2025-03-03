# 8kyu : Merge two sorted arrays into one

[Solutions: Merge two sorted arrays into one | Codewars](https://www.codewars.com/kata/5899642f6e1b25935d000161/solutions/solutions)

## My Solution

List concatanation 이 `list_one + list_two` 라고...
[How to concatenate two lists in Python? - Stack Overflow](https://stackoverflow.com/questions/1720421/how-to-concatenate-two-lists-in-python)

```python
def merge_arrays(arr1, arr2):
    return sorted(list(set(arr1 + arr2)))
```

## Other solution

```python
def merge_arrays(arr1, arr2):
    return sorted(set(arr1+arr2))
```
