/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const nums = Array(n).fill(null).map((v,i) => i+1);
    
    const generatePermutations = (array, length = array.length) => {
      const res = []

      const dfs = (cur, remain) => {
        if (cur.length === length) {
            if (res.length < k) res.push(cur.join(""));
          return
        }

        for (let i = 0; i < remain.length; i += 1) {
          cur.push(remain[i])
          dfs(cur, [...remain.slice(0, i), ...remain.slice(i + 1)])
          cur.pop()
        }
      }

      dfs([], array)

      return res
    }

    const permutations = generatePermutations(nums);
    return permutations[k-1];
    
};