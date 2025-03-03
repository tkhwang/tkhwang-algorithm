# [7 kyu] All Star Code Challenge #1 @ 2016.12.30

[Solutions: All Star Code Challenge #1 | Codewars](https://www.codewars.com/kata/5863f97fb3a675d9a700003f/solutions/python)

## My Solution

```python
def sum_ppg(playerOne, playerTwo):
    return playerOne['ppg'] + playerTwo['ppg']
```

## Better other solutions

### good to understand

dictionary 에서  `dic.get(‘key’)`

```python
def sum_ppg(playerOne, playerTwo):
    return playerOne.get('ppg') + playerTwo.get('ppg')
```

### Clever

lambda function 활용.

```python
sum_ppg=lambda a,b:a['ppg']+b['ppg']
```

