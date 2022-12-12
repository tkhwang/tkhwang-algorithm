# [6 kyu] Stop gninnipS My sdroW! @ 2016.11.13

[Solutions: Stop gninnipS My sdroW! | Codewars](https://www.codewars.com/kata/5264d2b162488dc400000001/solutions/python)

## My Solution

마지막 처리는 너무 이상하다. T_T;

```python
def spin_words(sentence):
    print sentence
    words = sentence.split()
    result = ""
    for word in words:
        print word
        if len(word) >= 5:
            result += word[::-1] + ' '
        else:
            result += word + ' '
    if result[-1] == ' ':
        return result[:-1]
    else:   
        return result
```

## Better other solutions

Logic 이 비슷해서 이해하기 쉬운 코드.
`" ".join()` 으로 처리하는 것이 마지막 `" "` 하는 것이 더 좋은 듯...

```python
def spin_words(sentence):
    L = sentence.split()
    new = []
    for word in L:
        if len(word) >= 5:
            new.append(word[::-1])
        else:
            new.append(word)
    string = " ".join(new)
    return string
```

아... list comprehension~~~ 

```python
def spin_words(sentence):
    return " ".join([x[::-1] if len(x) >= 5 else x for x in sentence.split(" ")])
```    

