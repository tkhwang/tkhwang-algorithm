# 8kyu : Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

[Solutions: Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence | Codewars](https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/solutions/python)

## My Solution

```python
def replace_exclamation(str):
    MATCH = "aeiouAEIOU"
    r = ""
    for s in str:
        if s in MATCH:
            r += "!"
        else:
            r += s
    return r
```


## Other Solution

### Clever 

regular expression

```python
import re

def replace_exclamation(s):
    return re.sub('[aeiouAEIOU]', '!', s)
```



```python
def replace_exclamation(s):
    return ''.join('!' if c in 'aeiouAEIOU' else c for c in s)
```

