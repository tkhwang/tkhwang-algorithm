# [7kyu] Highest and Lowest

[Solutions: Highest and Lowest | Codewars](https://www.codewars.com/kata/554b4ac871d6813a03000035/solutions/python)

## My Solution

```python
def high_and_low(numbers):
    numbers = list(map(int, numbers.split(" ")))
    m = max(numbers)
    n = min(numbers)
    return str(m) + " " + str(n)
```


## Better other solutions

### good to understand

```python
def high_and_low(numbers): #z.
    nn = [int(s) for s in numbers.split(" ")]
    return "%i %i" % (max(nn),min(nn))
```

```python
def high_and_low(numbers):
  n = map(int, numbers.split(' '))
  return "{} {}".format(max(n), min(n))
```


### Clever    

```python
def high_and_low(numbers):
  return " ".join(x(numbers.split(), key=int) for x in (max, min))
```
