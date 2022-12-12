# 8kyu : Calculate average

[Solutions: Calculate average | Codewars](https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/solutions/python)

## My solution

```python
def find_average(array):
    if not array:
        return 0
    else:
        r = 0
        for s in array:
            r += s
        return r/len(array)    
```

## Other solution

### Clever


```python
def find_average(array):
    return sum(array) / len(array) if array else 0
```
    
