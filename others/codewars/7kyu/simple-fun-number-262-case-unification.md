# 7kyu : Simple Fun #262: Case Unification

[Solutions: Simple Fun #262: Case Unification | Codewars](https://www.codewars.com/kata/59126cd3379de6ca5f00019c/solutions/python)

## My solution

```python
import string
def case_unification(msg):
    lower = sum(1 for x in msg if x in string.ascii_lowercase)
    upper = sum(1 for x in msg if x in string.ascii_uppercase)
    if lower > upper :
        return msg.lower()
    else:
        return msg.upper()
```


## Other solution

```python
def case_unification(s):
    return s.lower() if sum(1 for i in s if i.islower()) > sum(1 for i in s if i.isupper()) else s.upper()
```
