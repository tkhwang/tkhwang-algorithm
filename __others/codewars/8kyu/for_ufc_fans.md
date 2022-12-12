# 8kyu : For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre

[Solutions: For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre | Codewars](https://www.codewars.com/kata/582dafb611d576b745000b74/solutions/python)

## My Solution

```python
def quote(fighter):
    
    if fighter.lower() == 'george saint pierre':
        return "I am not impressed by your performance."
    elif fighter.lower() == 'conor mcgregor':
        return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
```

## Other solution

### Easier to understand

dictionary에 먼저 넣어둔다 ?

```python
statements = {
    'george saint pierre': "I am not impressed by your performance.",
    'conor mcgregor': "I'd like to take this chance to apologize.. To absolutely NOBODY!"
}

def quote(fighter):
    return statements[fighter.lower()]
```
