# [5 kyu] Convert PascalCase string into snake_case @ 2016.12.16

[Solutions: Convert PascalCase string into snake_case | Codewars](https://www.codewars.com/kata/529b418d533b76924600085d/solutions/python)

## My Solution


```python
import string

def to_underscore(string):
    result = ""
    for i, ch in enumerate(str(string)):
        if i == 0 and ch.isupper():
            result += ch.lower()
        elif i != 0 and ch.isupper():
            result += "_" + ch.lower()
        else:
            result += str(ch)
    return result  
```

## Better other solutions

### good to understand

거의 비슷하지만... 첫글자 처리가 멋지다.
그리고 list 로 처리해서 마지막에 string 으로 `return`

```python
def to_underscore(string):
    string = str(string)
    new = []
    for s in string:
        if not new:
            new.append(s)
        else:
            if s.isupper():
                new.append("_")
            new.append(s)
    return "".join(new).lower()
```


### clever


```python
def to_underscore(string):
    string = str(string)
    camel_case = string[0].lower()
    for c in string[1:]:
        camel_case += '_{}'.format(c.lower()) if c.isupper() else c
    return camel_case
```
