# 8kyu : Square(n) Sum

[Solutions: Square(n) Sum | Codewars](https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/python)

## My Solution

```python
def square_sum(numbers):
    sum = 0
    for i in numbers:
        sum = sum + i*i
    return sum
```


## Other solution


```python
def square_sum(numbers):
    return sum(x ** 2 for x in numbers)
```

```python
def square_sum(numbers):
    return sum(map(lambda x: x**2,numbers))
```

