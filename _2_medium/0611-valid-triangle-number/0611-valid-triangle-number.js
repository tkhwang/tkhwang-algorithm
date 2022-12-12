/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    const N = nums.length;
    nums.sort((a,b) => a - b);

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
    
    // [ a, b, c] => a + b > c
    const isTriangle = (a, b, c) => (a + b > c);

    let sum = 0;
    
    for (let i = 0; i < N - 2; i += 1) {
        for (let j = i + 1; j < N - 1; j += 1) {
            const index = bisectLeft(nums.slice(j+1), nums[i] + nums[j]);
            sum += index;
        }
    }
    return sum;
};