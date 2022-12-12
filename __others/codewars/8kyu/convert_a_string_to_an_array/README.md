# [8 kyu] Convert a string to an array

[Solutions: Convert a string to an array | Codewars](https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/solutions/python)

## My Solution

```python
def string_to_array(string):
    result = []
    if not string:
        result = [""]
    else:
        string = string.split()
        for s in string:
            result.append(s)
    return result
```

마지막에 `""` 에서 error 나서 앞의 if 추가했는데.. 이게 이게 뭐니 ???
String 을 split 으로 쪼개면 바로 list 가 되는구만... T_T;

## Better other solutions

```python
def string_to_array(string):
    return string.split(" ")
```

