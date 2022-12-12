# [7 kyu] Thinkful - String Drills: Areacode extractor @ 2016.12.30

[Solutions: Thinkful - String Drills: Areacode extractor | Codewars](https://www.codewars.com/kata/585a36b445376cbc22000072/solutions/python)

## My Solution


```python
def area_code(text):
    i = int(text.find('('))
    j = int(text.find(')'))
    return text[i+1:j]
```

## Better other solutions

### good to understand

`string.index(‘X’)` 하면 string 내의 해당 값의 index 를 얻을 수 있구나…

```python
def area_code(text):
  return text[text.index('(')+1:text.index(')')]
```

### Clever

```python
import re
def area_code(text):
    return re.search("\((\d{3})\)", text).group(1)
```

