# 8kyu : Remove First and Last Character


[Solutions: Remove First and Last Character | Codewars](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/solutions/python)

## My Solution

```python
def remove_char(s):
    if len(s) > 2:
        return s[1:-1]
    else:
        return ""
```


## Other solution

Size check를 안 해도 되나 ? 

```python
def remove_char(s):
    return s[1 : -1]
```

