# [6 kyu] Format a string of names like 'Bart, Lisa & Maggie'.

[Solutions: Format a string of names like 'Bart, Lisa & Maggie'. | Codewars](https://www.codewars.com/kata/53368a47e38700bd8300030d/solutions/python)

## My Solution

아.. 마음에 안 든다. 그냥 `, `, `& ` 을 그냥 그린 것 같다.

```python
def namelist(names):
    length = len(names)
    result = ""
    for i, name in enumerate(names):
        if length == 1:
            result += name['name']
            break;
        else:
            if i == length-1 :
                result += " & " + name['name']
            elif i == length-2 :
                result += name['name']
            else:
                result += name['name'] + ", "
    return result
```

## Better other solutions

```python
def namelist(names):
    if len(names) > 1:
        return '{} & {}'.format(', '.join(name['name'] for name in names[:-1]), 
                                names[-1]['name'])
    elif names:
        return names[0]['name']
    else:
        return ''
```

