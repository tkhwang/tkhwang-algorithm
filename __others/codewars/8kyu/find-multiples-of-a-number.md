# 8kyu : Find Multiples of a Number

[Solutions: Find Multiples of a Number | Codewars](https://www.codewars.com/kata/58ca658cc0d6401f2700045f/solutions/python)

## My solution

```python
def find_multiples(integer, limit):
    l = list()
    for i in range(1, int(limit/integer+1)):
        l.append(integer * i)
    return l
```

## Other solution

### Clever

```python
def find_multiples(integer, limit):
    return list(range(integer, limit+1, integer))
```
    
