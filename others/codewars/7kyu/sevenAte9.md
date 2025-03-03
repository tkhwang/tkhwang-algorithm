# 7kyu SevenAte9

## My solution

쉬운 문제라서 그런지 best solution 과도 비슷하다. ㅋㅋ

```python
def seven_ate9(str):
    while '797' in str:
        str = str.replace('797','77')
    return str
```


## Others

### Easier to understand

```python
def seven_ate9(str_):
   while str_.find('797') != -1:
       str_ = str_.replace('797','77')
   return str_
```


### Clever solution

