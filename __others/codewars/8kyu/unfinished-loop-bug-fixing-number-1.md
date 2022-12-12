# 8kyu : Unfinished Loop - Bug Fixing #1

[Solutions: Unfinished Loop - Bug Fixing #1 | Codewars](https://www.codewars.com/kata/55c28f7304e3eaebef0000da/solutions/solutions)

## My solution

```python
def create_array(n):
    res=[]
    i=1
    while i<=n:
        res.append(i)
        i += 1
    return res
```

## Other solution

### Clever

그지. 그냥 이렇게 해도 되지 뭐... 

```python
def create_array(n):
    return range(1, n+1)
```
    
