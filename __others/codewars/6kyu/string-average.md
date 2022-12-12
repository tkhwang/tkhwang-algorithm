# 6kyu : String average

[Solutions: Counting Duplicates | Codewars](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/solutions/solutions)

## My solution

아이 창피해라.... T_T;

```python
def average_string(s):
    s = s.split(" ")
    l = []
    for i in s:
        if i == "one":
            l.append(1)
        elif i == "two":
            l.append(2)
        elif i == "three":
            l.append(3)        
        elif i == "four":
            l.append(4)      
        elif i == "five":
            l.append(5)        
        elif i == "six":
            l.append(6)
        elif i == "seven":
            l.append(7)      
        elif i == "eight":
            l.append(8)      
        elif i == "nine":
            l.append(9)      
        elif i == "zero":
            l.append(0)      
        elif i == "":
            return "n/a"
        else:
            return "n/a"
    avg = int(sum(l) / float(len(l)))
    #print(avg)
    
    if avg == 1:
        return "one"
    elif avg == 2:
        return "two"
    elif avg == 3:
        return "three"
    elif avg == 4:
        return "four"
    elif avg == 5:
        return "five"
    elif avg == 6:
        return "six"
    elif avg == 7:
        return "seven"
    elif avg == 8:
        return "eight"
    elif avg == 9:
        return "nine"
    elif avg == 0:
        return "zero"
```

## Other solution

### Easy to understand

### Clever

```python
def average_string(ex):
    pt = {'seven': 7, 'nine': 9, 'six': 6, 'three': 3, 'two': 2, 'four': 4, 'zero': 0, 'five': 5, 'eight': 8, 'one': 1}
    try:
        return pt.keys()[pt.values().index(sum([pt[e] for e in ex.split()]) / len(ex.split()))]
    except (KeyError, ZeroDivisionError):
        return "n/a"
```




