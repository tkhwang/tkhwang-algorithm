# 7kyu : Hit Count

[Solutions: Hit Count | Codewars](https://www.codewars.com/kata/57b6f850a6fdc76523001162/solutions/solutions)

## My solution

```python
def counter_effect(hit_count):
    answer = list()
    for i in hit_count:
        answer.append(list(range(int(i)+1)))
    return answer
```

## Other solution

### Clever solution

```python
def counter_effect(hit_count):
    return [range(int(i)+1) for i in hit_count]
```


