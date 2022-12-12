# Tribonacci Sequence

## My solution

```js
function tribonacci([first, second, third],n){
  const dp = new Array(n)

  const tribonacci = (n) => {
    if (n === 1) {
      dp[1] = first
      return dp[1]
    }
    if (n === 2) {
      dp[2] = second
      return dp[2]
    }
    if (n === 3) {
      dp[3] = third
      return dp[3]
    }
    if (n > 3) {
      if (dp[n]) {
        return dp[n]
      } else {
        dp[n] = tribonacci(n-3) + tribonacci(n-2) + tribonacci(n-1)
        return dp[n]
      }
    }
  }

  const result = []
  let i = 1
  while (i <= n) {
    result.push(tribonacci(i))
    i += 1
  }

  return result
}
```

## Other solution

```js
function tribonacci(signature,n){
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
```
