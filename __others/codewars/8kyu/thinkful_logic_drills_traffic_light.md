# 8kyu : Thinkful - Logic Drills: Traffic light

[Solutions: Thinkful - Logic Drills: Traffic light | Codewars](https://www.codewars.com/kata/58649884a1659ed6cb000072/solutions/python)

## My solution

나름 좋은 로직이라고 좋아했는데... `list.index()` 하면 되는구나... 흑...

```python
LIGHT = {
    'green'  : 0 ,
    'yellow' : 1 ,
    'red'    : 2 }

def update_light(current):
    i = (LIGHT[current] + 1) %3
    return [x for x in LIGHT.keys() if LIGHT[x] == i][0]
```

## Other solution

### Easy to understand

```python
def update_light(current):
    colours = ['green', 'yellow', 'red']
    return colours[(colours.index(current)+1)%3]
```

### Clever

우아 이거 대박이네...

```python
def update_light(current):
    return {"green": "yellow", "yellow": "red", "red": "green"}[current]

  In [10]: {"green": "yellow", "yellow": "red", "red": "green"}
  Out[10]: {'green': 'yellow', 'red': 'green', 'yellow': 'red'}

  In [11]: {"green": "yellow", "yellow": "red", "red": "green"}[ 'green']
  Out[11]: 'yellow'
```
