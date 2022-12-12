## 344. Reverse String

https://leetcode.com/problems/reverse-string/

## My solution

#### Damn simple using `reverse()`

```typescript
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    s.reverse()
};
```

* two-pinter method
* 기존 변수 이용한 destructuring

 ```
 ([ s[right], s[left] ] = [ s[left], s[right]])
 ```

```typescript
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        ([ s[right], s[left] ] = [ s[left], s[right]])
        left += 1
        right -= 1
    }
};
```
