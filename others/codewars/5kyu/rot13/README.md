# [5 kyu] ROT13 @ 2017.01.15

[Solutions: ROT13 | Codewars](https://www.codewars.com/kata/52223df9e8f98c7aa7000062/solutions/python)

## My Solution


```python
def rot13(str):
    result = ''
    for i, s in enumerate(str):
        if 65 <= ord(s) and ord(s) <= 77:
            result += chr(ord(s) + 13)
        elif 78 <= ord(s) and ord(s) <= 90:
            result += chr(ord(s) - 13)
        elif 97 <= ord(s) and ord(s) <= 109:
            result += chr(ord(s) + 13)
        elif 110 <= ord(s) and ord(s) <= 122:
            result += chr(ord(s) - 13)
        else:
            result += s

    return result
```

## Better other solutions

### good to understand

```python
def rot13(message):
    def decode(c):
        if 'a' <= c <= 'z':
            base = 'a'
        elif 'A' <= c <= 'Z':
            base = 'A'
        else:
            return c
        return chr((ord(c) - ord(base) + 13) % 26 + ord(base))
    return "".join(decode(c) for c in message)
```

```python
import string

def rot13(message):
  first = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
     trance = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
  return message.translate(string.maketrans(first, trance))
```


### clever

`encode('rot13')` 도 지원 되는군요...

```python
def rot13(message):
  return message.encode('rot13')
```
