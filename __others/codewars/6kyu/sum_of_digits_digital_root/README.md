# [6 kyu] Sum of Digits / Digital Root @ 2016.12.12

[Solutions: Sum of Digits / Digital Root | Codewars](https://www.codewars.com/kata/541c8630095125aba6000c00/solutions/python)

## My Solution

```python
def digital_root(n):
    sum = 0
    for i in str(n):
        sum += int(i)
    if sum >= 10:
        return digital_root(sum)
    else:
        return sum
```

## TIL

```python
In [1]: s = "12345"

In [3]: for i in s:
      2     print i
1
2
3
4
5

In [2]: map(int,str(s))
Out[2]: [1, 2, 3, 4, 5]
```


## Better other solutions


```python
def digital_root(n):
    while n>9:
        n=sum(map(int,str(n)))
    return n
```    

```python
def digital_root(n):
    return n if n < 10 else digital_root(sum(map(int,str(n))))
```

