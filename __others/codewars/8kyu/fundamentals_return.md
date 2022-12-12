# 8kyu : Fundamentals: Return

[Solutions: Fundamentals: Return | Codewars](https://www.codewars.com/kata/55a5befdf16499bffb00007b/solutions/python)
## My solution

```python
def add(a,b):
    return a+b

def multiply(a,b):
    return a*b

def divide(a,b):
    if type(a).__name__ == "int":
        return a/b
    else:
        return a/b/1.0

def mod(a,b):
    return a%b

def exponent(a,b):
    return a**b

def subt(a,b):
    return a-b
```

## Other solution

### Easy to understand

lambda expression 좋네....

```python
add = lambda a, b: a + b
multiply = lambda a, b: a * b
divide = lambda a, b: a / b
mod = lambda a, b: a % b
exponent = lambda a, b: a ** b
subt = lambda a, b:a - b
```

### Clever

```python
from operator import add, mul as multiply, div as divide, mod, pow as exponent, sub as subt
```
