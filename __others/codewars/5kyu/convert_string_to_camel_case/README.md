# [5 kyu] Convert string to camel case @ 2016.12.24

[Solutions: Convert string to camel case | Codewars](https://www.codewars.com/kata/517abf86da9663f1d2000003/solutions/python)

## My Solution


```python
def to_camel_case(text):
    result = []
    found = 0
    for i, ch in enumerate(text):
        if ch == '-' or ch == '_':
            found = 1
            continue
        else:
            if found:
                result.append(ch.upper())
                found = 0
            else:
                result.append(ch)

    return "".join(result)
```

## Better other solutions

### good to understand

```python
def to_camel_case(text):
    removed = text.replace('-', ' ').replace('_', ' ').split()
    if len(removed) == 0:
        return ''
    return removed[0]+ ''.join([x.capitalize() for x in removed[1:]])
```


### clever


```python
def to_camel_case(text):
    return text[0] + ''.join([w[0].upper() + w[1:] for w in text.replace("_", "-").split("-")])[1:] if text else ''
```

