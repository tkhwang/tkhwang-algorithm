/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const n = height.length;
    
    let left = 0;
    let right = n - 1;
    let max = -Infinity;
    
    
    while (left < right) {
        const min = Math.min(height[left], height[right]);
        const localArea = min * (right - left);
        if (max < localArea) max = localArea;
        
        if (min === height[left]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    
    return max;
};