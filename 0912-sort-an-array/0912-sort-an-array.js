/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
    const merge = (arr1, arr2) => {
        const N1 = arr1.length;
        const N2 = arr2.length;
        
        const res = Array(N1 + N2).fill(0);
        
        let i1 = 0;
        let i2 = 0;
        let i = 0;
        
        while (i1 < N1 && i2 < N2) {
            if (arr1[i1] <= arr2[i2]) {
                res[i] = arr1[i1];
                i1 += 1;
            } else {
                res[i] = arr2[i2];
                i2 += 1;
            }
            i += 1;
        }
        
        while (i1 < N1) {
            res[i] = arr1[i1];
            i += 1;
            i1 += 1;
        }
        while (i2 < N2) {
            res[i] = arr2[i2];
            i += 1;
            i2 += 1;
        }
        
        return res;
    }
    
    const mergeSort = (nums) => {
        const N = nums.length;
        if (N < 2) return nums;
        
        const mid = Math.floor(N/2);

        return merge(
            mergeSort(nums.slice(0, mid)),
            mergeSort(nums.slice(mid))
        )
    }
    
    return mergeSort(nums);
};