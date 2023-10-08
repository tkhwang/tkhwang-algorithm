/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    const N1 = nums1.length;
    const N2 = nums2.length;
    
    const max1 = Math.max(...nums1);
    const min1 = Math.min(...nums1);
    const max2 = Math.max(...nums2);
    const min2 = Math.min(...nums2);
    
    const cache = Array(N1).fill(null).map((_) => Array(N2).fill(null));
    
    if (max1 < 0 && min2 > 0) return max1 * min2;
    if (max2 < 0 && min1 > 0) return max2 * min1;

    const dfs = (i1, i2) => {
        if (i1 >= N1 || i2 >= N2) return 0;
        
        if (cache[i1][i2]) return cache[i1][i2];
        
        const choice1 = nums1[i1] * nums2[i2] + dfs(i1 + 1, i2 + 1);
        const choice2 = dfs(i1 + 1, i2);
        const choice3 = dfs(i1, i2 + 1);
        
        return cache[i1][i2] = Math.max(choice1, choice2, choice3);
    }
    
    return dfs(0, 0);
};