# [7 kyu] Flatten Me

[Kata Stats: Flatten Me | Codewars](https://www.codewars.com/kata/flatten-me/python)

## My Solution

```python
def flatten_me(lists):
    result = []
    for l in lists:
        print l
        if type(l) is list:
            for i in l:
                result.append(i)
        else:
            result.append(l)
    return result
```

## Better other solutions


`isinstance(variable, list)`
재귀호출 이용.

```python
def flatten_me(nput):
    output = []
    for itm in nput:
        if isinstance(itm, list):
            output += flatten_me(itm)
        else:
            output += [itm]
    return output
```

```python
def flatten_me(l):
    m = []
    for item in l:
        if type(item) is list:
            m += item
        else:
            m.append(item)
    return m
```

