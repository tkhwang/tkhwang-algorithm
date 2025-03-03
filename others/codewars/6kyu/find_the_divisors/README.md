# [6 kyu] Find the divisors! @ 2016.12.15

[Solutions: Find the divisors!. | Codewars](https://www.codewars.com/kata/544aed4c4a30184e960010f4/solutions/python/all/best_practice)

## My Solution

list 와 string 으로 다른 type 으로 `return` 을 해도 되나 ? python 은 되나 보네...
아 이번에도 list comprehension... 다음에는 꼭 써보자...

```python
def divisors(integer):
    l = []
    msg = ""
    for i in range(2,integer):
        if not integer % i:
            l.append(i)
    if not l:
        msg = str(integer) + " is prime"
        return msg
    else:
        return l
```

## Better other solutions

```python
def divisors(num):
    l = [a for a in range(2,num) if num%a == 0]
    if len(l) == 0:
        return str(num) + " is prime"
    return l
```

