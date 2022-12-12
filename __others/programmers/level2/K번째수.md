# K번째수

https://programmers.co.kr/learn/courses/30/lessons/42748

## My solution

```js
function solution(array, commands) {
    const result = []
    for (const [i, j, n] of commands) {
        const value = [...array].splice(i - 1, j - i + 1).sort((a,z) => a - z)
        result.push(value[n - 1])
    }

    return result
}
```

