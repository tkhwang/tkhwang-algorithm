# 7kyu : Friend or Foe?

[Solutions: Friend or Foe? | Codewars](https://www.codewars.com/kata/55b42574ff091733d900002f/solutions/python)

## My solution

```python
def length(s):
    return sum(c.isalpha() for c in s)

def friend(words):
    result = list()
    for word in words:
        print(word)
        if length(word) == 4:
            result.append(word)
    return result
```


## Better other solutions

### Clever solution

```python
def friend(x):
    return [f for f in x if len(f) == 4]
```
