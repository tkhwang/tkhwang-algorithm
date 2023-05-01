/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var minOperations = function(nums, queries) {
    const bisectLeft = (array, target, left = 0, right = array.length) => {
      // [left, right) half inclusive range

      while (left < right) {
        const mid = Math.floor((left + right) / 2)

        // left-most
        if (array[mid] >= target) {
          right = mid
        } else {
          left = mid + 1
        }
      }
      return left
    }
    
    const N = nums.length;
    const NQ = queries.length;

    nums.sort((a,b) => a - b);
    
    const prefixSum = Array(N).fill(0);
    let sum = 0;
    for (const [ i, num ] of nums.entries()) {
        sum += num;
        prefixSum[i] = sum;
    }
    
    
    const res = [];
    for (const query of queries) {
        const index = bisectLeft(nums, query);
        let sum = 0;
        // plus
        sum += prefixSum[N-1] - (prefixSum[index - 1] || 0) - (N-1-index + 1) * query;
        // minus
        sum += (index) * query - (prefixSum[index - 1] || 0);
        res.push(sum);
    }
    
    return res;
};