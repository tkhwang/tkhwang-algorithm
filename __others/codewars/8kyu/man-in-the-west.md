# 8kyu : Man in the west

[Solutions: Man in the west | Codewars](https://www.codewars.com/kata/59bd5dc270a3b7350c00008b/solutions/python)

## My Solution

```python
def check_the_bucket(bucket):
    if "gold" in bucket:
        return True
    else:
        return False
```


## Other Solution

### Clever 

바로 evaluation 해서 return 해도 되는구나...

```python
def check_the_bucket(bucket):
    return 'gold' in bucket
```

lambda expression 으로 쓰면...

```python
check_the_bucket = lambda bucket: 'gold' in bucket
```

