# 7kyu : Back to Basics

[Solutions: Back to Basics | Codewars](https://www.codewars.com/kata/55a89dd69fdfb0d5ce0000ac/solutions/python)

## My solution

```python
def types(x):
    return str(type(x))[7:-2]
```

`type()` 출력이 보이는데로 아니군요...

```python
In [1]: type(10)
Out[1]: int

In [2]: str(type(10))
Out[2]: "<type 'int'>"
```

## Other solutions

### Easier to understand

`type().__name__` 이라니...

```python
def types(x):
    return type(x).__name__
```
