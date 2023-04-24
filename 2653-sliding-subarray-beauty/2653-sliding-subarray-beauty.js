/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function(nums, k, x) {
    const N = nums.length;

    const freq = {};
    const res = [];
    
    const findXthLargest = (freq, x) => {
        let count = 0;
        for (let i = -50; i < 0; i += 1) {
            count += freq[i] || 0;
            if (count >= x) return i;
        }    
        return 0;
    }
    
    for (let i = 0; i < k - 1; i += 1) {
        const cur = nums[i];
        freq[cur] = (freq[cur] || 0) + 1;
    }
    
    for (let i = k - 1; i < N; i += 1) {
        const cur = nums[i];
        freq[cur] = (freq[cur] || 0) + 1;
        res.push(findXthLargest(freq, x));
        const oldest = nums[i-k+1];
        freq[oldest] -= 1;
    }
    
    return res;
};