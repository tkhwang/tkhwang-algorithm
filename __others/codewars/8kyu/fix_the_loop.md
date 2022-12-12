# 8kyu : Fix the loop!

[Solutions: Fix the loop! | Codewars](https://www.codewars.com/kata/55ca43fb05c5f2f97f0000fd/solutions/python)

## My Solution

```python
def list_animals(animals):
    r = ""
    for i, s in enumerate(animals):
        r += str(i+1) + ". " + s + "\n"
    return r
```

## Other solution

```python
def list_animals(animals):
    return ''.join('{}. {}\n'.format(i, x) for (i, x) in enumerate(animals, 1))
```
