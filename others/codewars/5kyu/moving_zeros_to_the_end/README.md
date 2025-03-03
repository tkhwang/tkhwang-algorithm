# [5 kyu] Snail @ 2017.01.15 

[Solutions: Moving Zeros To The End | Codewars](https://www.codewars.com/kata/52597aa56021e91c93000cb0/solutions/python)

## My Solution


```python
def move_zeros(array):
    l = []
    z = []
    for i, s in enumerate(array):
        if s in (None, '') or s is False:
            l.append(s)
        elif s == 0:
            z.append(s)
        elif s is not None:
            l.append(s)
        else:
            l.append(s)
    return l+z
```

## Better other solutions

### good to understand

이건 로직은 거의 같은데, 조건이 잘 정리가 되었네...
`type(ch) != bool`

```python
def move_zeros(array):
    l1=[]
    l2=[]
    for i in array:
        if i==0 and type(i)!=bool:
            l2.append(i)
        else:
            l1.append(i)
    return l1+l2
```

### clever

조건 체크는 같지만 list comprehension 으로 역시나 짧게...

```python
def move_zeros(arr):
    l = [i for i in arr if isinstance(i, bool) or i!=0]
    return l+[0]*(len(arr)-len(l))
```

