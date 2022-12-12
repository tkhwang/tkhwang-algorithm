# 7kyu : Vowel Count

[Solutions: Vowel Count | Codewars](https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/python)

## My solution

```python
def getCount(inputStr):
    num_vowels = 0
    for ch in inputStr:
        if ch in "aeiou":
            num_vowels += 1
    return num_vowels
```


## Better other solutions

### Clever    

이게 되는구나 ? 해당되는 경우에 `1` 이 되고, 그것들의 `sum` 이 계산이 되나 보네... 

```python
def getCount(inputStr):
    return sum(1 for let in inputStr if let in "aeiouAEIOU")
```

