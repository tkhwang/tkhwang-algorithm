# 8kyu : invert values

[Solutions: Invert values | Codewars](https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/solutions/python)

## My solution

```python
def invert(lst):
    return list(map(lambda x : x * -1, lst))
```


## Other solution

### Easy to understand

```python
def invert(lst):
    return [-x for x in lst]
```


