# [7 kyu] Credit Card Mask

[Kata Stats: Credit Card Mask | Codewars](https://www.codewars.com/kata/credit-card-mask/python)

## My Solution

```python
def maskify(cc):
    l = len(cc)
    if l <= 4:
        return cc
    else:
        return '#'*(l-4) + cc[-4:]
```

## Better other solutions

```python
def maskify(cc):
    return "#"*(len(cc)-4) + cc[-4:]
```

string을 `negative` 만큰 반복하면 string 출력이 되지 않는구나.

```
In [3]: "*"*(5)
Out[3]: '*****'


In [4]: "*"*(-1)
Out[4]: ''


In [5]: "*"*(-9)
Out[5]: ''
```

