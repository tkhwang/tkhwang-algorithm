/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const N = height.length;
    
    let left = 0;
    let right = N - 1;
    
    let max = -Infinity;

    while (left < right) {
        const min = Math.min(height[left], height[right]);
        const localArea = min * (right - left);
        max = Math.max(max, localArea);
        
        if (height[left] < height[right]) left += 1;
        else right -= 1;
    }
    
    return max;
};