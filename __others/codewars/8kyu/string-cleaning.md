# 8kyu : String cleaning

[Solutions: String cleaning | Codewars](https://www.codewars.com/kata/string-cleaning/solutions?show-solutions=1)

## Solution

```python
def string_clean(s):
    return ''.join(x for x in s if not x.isdigit())
```
