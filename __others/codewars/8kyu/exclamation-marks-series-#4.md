# 8kyu : Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

[Solutions: Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string | Codewars](https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/solutions/python)

## My solution

```python
def remove(s):
     s = s.replace("!","")
     s = s + "!"
     return s
```


## Other solution

### Easy to understand

```python
def remove(s):
    return s.replace("!", "") + "!"
```

### Clever

```python
remove = lambda s: s.replace('!', '') + '!'
```