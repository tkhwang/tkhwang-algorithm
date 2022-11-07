/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    const N = nums.length;

    const prefixSum = [ nums[0] ];
    for (let i = 1; i < N; i += 1) {
        prefixSum.push(prefixSum[i-1] + nums[i]);
    }

    const freq = {};
    let left = 0;
    let max = -Infinity;
    let len = 0;
    
    for (let right = 0; right < N; right += 1) {
        const cur = nums[right];
        
        // freq[cur] = (freq[cur] || 0) + 1;
        
        if (freq[cur] === undefined) {
            len += 1;
            freq[cur] = 1;
        } else {
            freq[cur] += 1;
        }
        
        while (right - left + 1 > k) {
            const leftNum = nums[left];
            
            freq[leftNum] -= 1;
            if (freq[leftNum] === 0) {
                len -= 1;
                delete freq[leftNum];
            }
            
            left += 1;
        }
        
        if (right >= k - 1) {
            // if (Object.keys(freq).length === k) {
            if (len === k) {
                const localSum = prefixSum[right] - prefixSum[left] + nums[left];
                if (max < localSum) max = localSum;
            }
        }
    }
    return max === -Infinity ? 0 : max;
};