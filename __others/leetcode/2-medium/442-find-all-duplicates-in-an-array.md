# 442. Find All Duplicates in an Array

https://leetcode.com/problems/find-all-duplicates-in-an-array/

## My solution

```ts
function findDuplicates(nums: number[]): number[] {
    const cache: { [num: number]: true } = {}
    const result: number[] = []

    for (const num of nums) {
        if (cache.hasOwnProperty(num)) result.push(num)
        else cache[num] = true
    }
    return result
};
```
