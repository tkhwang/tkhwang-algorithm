/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var countPairs = function(nums1, nums2) {
    const arr = nums1.map((v, i) => nums1[i] - nums2[i]);
    arr.sort((a,b) => a - b);

    const N = arr.length;
    
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
    
    console.log(arr);
    
    let res = 0;
    for (const [ i, n ] of arr.entries()) {
        const index = bisectLeft(arr, -n+1);
        res += N - Math.max(i+1, index)
    }
    
    return res;
};