# [4 kyu] Snail @ 2017.01.02

[Train: Snail | Codewars](https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/python)

## My Solution


```python
def snail(array):

    result = []

    while( len(array) ):
        # Top => Right
        result += array[0]
        del array[0]

        if len(array) > 0:

            # Right => Bottom
            for y in xrange(len(array)):
                result.append(array[y][-1])
                del array[y][-1]

            # Bottom => Left
            result += array[-1][::-1]
            del array[-1]

            # Left => Top
            for y in xrange(len(array)):
                result.append(array[len(array)-1-y][0])
                del array[len(array)-1-y][0]

    return result
```

## Better other solutions

### clever

우앙… 한 줄로…
`zip()` 에 recursive 로…. 이해하긴 좀 어렵네….

```python
def snail(array):
    return list(array[0]) + snail(zip(*array[1:])[::-1]) if array else []
```

