# 6kyu : Your order, please

[Solutions: Your order, please | Codewars](https://www.codewars.com/kata/55c45be3b2079eccff00010f/solutions/python)

## My solution

```python
import string
import re

def order(string):
    m = string.split(" ")
    r = ""
    for i in range(10):
        for s in m:
            if str(i) in s:
                r += s + " "
    return r[:-1]
```

## Other solution

### Clever


```python
def order(sentence):
  # code here
  """splitting the sentence with split(), 
     use the sorted() function to (1) sort sentence.split(), where the numbers will be the
     first entries of each sublist. Then use sorted() again to sort the sublists.
  """
  return ' '.join(sorted(sentence.split(), key=sorted))
```


```python
def order(words):
  return ' '.join(sorted(words.split(), key=lambda w:sorted(w)))
```

