/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const N = height.length;
    
    let left = 0;
    let right = N - 1;

    let maxL = height[0];
    let maxR = height[N-1];
    
    let res = 0;
    
    while (left < right) {
        maxL = Math.max(maxL, height[left]);
        maxR = Math.max(maxR, height[right]);
        
        if (maxL < maxR) {
            res += maxL - height[left];
            left += 1;
        } else {
            res += maxR - height[right];
            right -= 1;
        }
    }
    
    return res;
};