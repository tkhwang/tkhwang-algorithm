# [5 kyu] Luck check @ 2016.12.21

[Solutions: Luck check | Codewars](https://www.codewars.com/kata/5314b3c6bb244a48ab00076c/solutions/python)

## My Solution

아.. 맘에 안 든다. 그냥 어거지로 끼워 맞춘 느낌이다.
좀더 logical 하게 할 수는 없을까 ?

```python
import string

def luck_check(string):
    left = 0
    right = 0

    r = len(string) % 2

    for i, s in enumerate(string):

        if not s.isdigit():
            raise error

        if i <= ( len(string)/2 -1 ):
            left += int(s)
        elif i >= ( len(string)/2 + r ):
            right += int(s)
            
    return left == right
```

## Better other solutions


```python
def luck_check(string):
    e0, b1 = len(string) // 2, (len(string) + 1) // 2
    return sum(map(int, string[:e0])) == sum(map(int, string[b1:]))
```
