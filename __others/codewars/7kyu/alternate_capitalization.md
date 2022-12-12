# 7kyu : Alternate capitalization

[Solutions: Alternate capitalization | Codewars](https://www.codewars.com/kata/59cfc000aeb2844d16000075/solutions/python)
## My solution

```python
def capitalize(str):
    r_even = ""
    r_odd  = ""
    for i, s in enumerate(str):
        if i % 2 == 0:
            r_even += s.upper()
            r_odd  += s.lower()
        else:
            r_even += s.lower()
            r_odd  += s.upper()
    return [r_even, r_odd]
```


## Better other solutions

### Clever    

```python
def capitalize(s):
    s = ''.join(c if i%2 else c.upper() for i,c in enumerate(s))
    return [s, s.swapcase()]
```

