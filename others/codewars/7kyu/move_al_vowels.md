# 7kyu : Move all vowels

[Solutions: Move all vowels | Codewars](https://www.codewars.com/kata/56bf3287b5106eb10f000899/solutions/python)

## My solution

```python
def move_vowels(str): 
    vowel = ""
    consonants = ""
    for s in str:
        if s in "aeiou":
            vowel += s
        else:
            consonants += s
    return consonants + vowel
```


## Better other solutions

### Easy to understand

List comprehension !

```python
def move_vowels(input): 
    x="".join([x for x in input if x not in "aeiou"])
    y="".join([y for y in input if y in "aeiou"])
    return x+y
```


### Clever    

이게 어떻게 동작하지 ?

```python
def move_vowels(s): 
    return ''.join(sorted(s, key=lambda k: k in 'aeiou'))
```

