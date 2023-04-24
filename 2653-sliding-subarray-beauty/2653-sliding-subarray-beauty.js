/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function(nums, k, x) {
    const N = nums.length;
    
    const res = [];
    const freq = {};
    
    const findXthSmallest = (freq, x) => {
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
        
        const value = findXthSmallest(freq, x);
        res.push(value);
        
        //                   |-----------------|
        //    i - (k - 1) , ... , i-1,  i, i +1
        const oldest = nums[i-k+1];
        freq[oldest] -= 1;
    }
    
    return res;
};