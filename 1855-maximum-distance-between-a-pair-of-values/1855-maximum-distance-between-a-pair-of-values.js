/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    const N1 = nums1.length;
    const N2 = nums2.length;
    
    const bisectLeft = (array, target) => {
        const N = array.length;
        
        // [0, N)
        let left = 0;
        let right = N;
        
        while (left < right) {
            const mid = Math.floor((left + right)/2);
            
            // => [left, mid)
            if (array[mid] === target) {
                right = mid;
            // select left space => [left, mid)
            } else if (array[mid] > target) {
                right = mid;
            // select right space => [mid + 1, right)
            } else if (array[mid] < target) {
                left = mid + 1;
            }
        }
        return left;
    }

    nums2.reverse();
    
    let max = 0;
    for (let i = 0; i < N1; i += 1) {
        const j = bisectLeft(nums2, nums1[i]);
        max = Math.max(max, N2 - 1 - j - i)
    }
    
    return max;
};