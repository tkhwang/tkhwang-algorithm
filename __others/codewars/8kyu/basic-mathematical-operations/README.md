# 8kyu : Basic Mathematical Operations

[Solutions: Basic Mathematical Operations | Codewars](https://www.codewars.com/kata/57356c55867b9b7a60000bd7/solutions/python)

## My solution

```python
def basic_op(operator, v1, v2):
    if operator == "+":
        return v1 + v2
    elif operator == "-":
        return v1 - v2
    elif operator == "*":
        return v1 * v2
    elif operator == "/":
        return v1 / v2
```


## Other solutions

### Clever

WoW~~~~

```python
def basic_op(operator, value1, value2):
    return eval("{}{}{}".format(value1, operator, value2))
```
