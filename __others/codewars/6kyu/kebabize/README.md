# [5 kyu] Kebabize @ 2016.12.26

[Solutions: Kebabize | Codewars](https://www.codewars.com/kata/57f8ff867a28db569e000c4a/solutions/python)

## My Solution


```python
import string 

def kebabize(string):
    result = ""
    j = 0
    for i, s in enumerate(string):
        if s.isalpha() :
            if i == 0:
                result += s.lower()
            else:
                if s.isupper() and j != 0 :
                    result += "-" + s.lower()
                else:
                    result += s.lower()    
            j = j + 1
        else:
            continue
    return result
```

## Better other solutions

### good to understand

```python
def kebabize(s):
    ns = []
    for x in list(s):
        if not x.isdigit():
            if x.isupper() and ns:
                ns.append('-')
            ns.append(x)
    return ''.join(ns).lower()
```

### clever

```python
def kebabize(s):
    return ''.join(c if c.islower() else '-' + c.lower() for c in s if c.isalpha()).strip('-')
```

