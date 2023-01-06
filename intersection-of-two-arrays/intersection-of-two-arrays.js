/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const checked = new Set();
    
    const bisect = (array, target) => {
        const N = array.length;
        
        // [left, right]
        let left = 0;
        let right = N-1;
        
        while (left <= right) {
            const mid = Math.floor((left + right)/2);
            
            if (array[mid] === target) return mid;
            else if (array[mid] > target) {
                right = mid - 1;    
            } else if (array[mid] < target) {
                left = mid + 1;
            }
        }
        return -1;
    }    
    
    nums2.sort((a,b) => a - b);
    
    const res = [];
    for (const num of nums1) {
        if (checked.has(num)) continue;
        
        checked.add(num);
        const found = bisect(nums2, num);
        
        if (found !== -1) {
            res.push(num);
        }
    }
    
    return res;
};