/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(_nums) {
    const N = _nums.length;
    
    /*
              left, right
               |
     */
    
    const isOK = (max) => {        
        if (_nums[0] > max) return false;
        
        const nums = [..._nums];
        for (let i = N - 1; i >= 1; i -= 1) {
            let prv = nums[i-1];
            let cur = nums[i];
            
            if (cur < max) continue;
            
            const diff = cur - max;
            nums[i-1] += diff;
            nums[i] -= diff;
        }
        
        return nums[0] <= max;
    }
    
    let left = Math.min(..._nums);
    let right = 10 ** 9;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isOK(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};