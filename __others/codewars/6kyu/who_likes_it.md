# 6kyu : Who likes it?

[Solutions: Who likes it? | Codewars](https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions/python)

## My solution

```python
def likes(names):
    if len(names) == 0:
        msg = "no one likes this"
    elif len(names) == 1:
        msg = "%s likes this" % names[0]
    elif len(names) == 2:
        msg = "%s and %s like this" % (names[0], names[1])
    elif len(names) == 3:
        msg =  "%s, %s and %s like this" % (names[0], names[1], names[2])
    elif len(names) > 3 :
        msg = "%s, %s and %s others like this" % (names[0], names[1], len(names)-2)
    return msg
```

## Other solution

### Clever

간단하긴 한데... 생각하기는 좀 어렵네...

```python
def likes(names):
    n = len(names)
    return {
        0: 'no one likes this',
        1: '{} likes this', 
        2: '{} and {} like this', 
        3: '{}, {} and {} like this', 
        4: '{}, {} and {others} others like this'
    }[min(4, n)].format(*names[:3], others=n-2)
```




