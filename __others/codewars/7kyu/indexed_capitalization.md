# 7kyu : Indexed capitalization

[Solutions: Indexed capitalization | Codewars](https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/solutions/python)

## My solution

```python
def capitalize(str,ind):
    r = ""
    for i, s in enumerate(str):
        if i in ind:
            r+= s.upper()
        else:
            r += s.lower()
    return r
```


## Better other solutions

### Clever    

내용은 거의 같은데... list comprehension 이 안 써진다... T_T;

```python
def capitalize(s,ind):
    return "".join([j.upper() if i in ind else j for i,j in enumerate(s)])
```

