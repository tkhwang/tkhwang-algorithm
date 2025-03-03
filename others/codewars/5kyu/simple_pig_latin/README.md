# [5 kyu] Simple Pig Latin @ 2016.12.17

[Solutions: Simple Pig Latin | Codewars](https://www.codewars.com/kata/520b9d2ad5c005041100000f/solutions/python)

## My Solution

```python
def pig_it(text):
    text = text.split()
    result = ""
    for i, ch in enumerate(text):
        if ch in "?!":
            result += ch + " "
        else:
            result += ch[1:] + ch[0] + "ay" + " "
    return result[:-1]
```

## Better other solutions

중간 계산을 string 으로 만들어나가니깐 마지막 `space` 때문에 `return` 시에 `result[:-1]` 로 하는 것이 너무 싫었는데... list 에 넣고, 마지막 `return` 시에 `" ".join(result_list)` 로 반환을 하면 되는구나...

```python
def pig_it(text):
    res = []
    
    for i in text.split():
        if i.isalpha():
            res.append(i[1:]+i[0]+'ay')
        else:
            res.append(i)
            
    return ' '.join(res)
```


역시나 list comprehension ! `[ word .. for word in list]`


```python
def pig_it(text):
    lst = text.split()
    return ' '.join( [word[1:] + word[:1] + 'ay' if word.isalpha() else word for word in lst])
```
