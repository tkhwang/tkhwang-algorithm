/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    const N = nums.length;
    
    const merge = (left, mid, right) => {
        let i = left;
        let j = mid;
        let k = 0;
        
        let temp = Array(right - left + 1).fill(0);
        let count = 0;
        
        // count
        while (i < mid && j <= right) {
            if (nums[i] > 2 * nums[j]) {
                count += mid - i;
                j += 1;
            } else {
                i += 1;
            }
        }
        
        // sort
        i = left;
        j = mid;
        k = 0;
        
        while (i < mid && j <= right) {
            if (nums[i] >  nums[j]) {
                temp[k] = nums[j];
                j += 1;
                k += 1;
            } else {
                temp[k] = nums[i];
                i += 1;
                k += 1;
            }
        }
            while (i < mid) {
                temp[k] = nums[i];
                i += 1;
                k += 1;
            }
            while (j <= right) {
                temp[k] = nums[j];
                j += 1;
                k += 1;
            }
            k = 0;
            while (left <= right) {
                nums[left] = temp[k];
                k += 1;
                left += 1;
            }
            return count;
    }
    
    const mergeSort = (low, high) => {
        if (low >= high) return 0;
            
        const mid = Math.floor((low + high) / 2);

        let inv = mergeSort(low, mid);
        inv += mergeSort(mid + 1, high);
        inv += merge(low, mid + 1, high);
        return inv;
    }
    
    return mergeSort(0, N - 1)
};