/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var minAbsDifference = function(nums, goal) {
    const N = nums.length;
    const mid = Math.floor(N/2);
    
    const part1 = nums.slice(0, mid);
    const part2 = nums.slice(mid);
    
    const findSubsetSum = (array, i, sum, total) => {
        if (i >= array.length) {
            total.add(sum);
            return;
        }

        findSubsetSum(array, i + 1, sum + array[i], total);
        findSubsetSum(array, i + 1, sum, total);
    }
    
    const sum1 = new Set();
    findSubsetSum(part1, 0, 0, sum1);
    
    const sum2 = new Set();
    findSubsetSum(part2, 0, 0, sum2);

    const arr1 = Array.from(sum1);
    const arr2 = Array.from(sum2)
    arr2.sort((a,b) => a - b);
    
    console.log(arr1);
    console.log(arr2);
    
    let min = Infinity;
    
    for (const num1 of arr1) {
        let left = 0;
        let right = arr2.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right)/2);
            const num2 = arr2[mid];
            
            min = Math.min(min, Math.abs(num1 + num2 - goal));
            
            if (num1 + num2 === goal) break;
            else if (num1 + num2 < goal) {
                left = mid + 1;
            } else if (num1 + num2 > goal) {
                right = mid - 1;
            }
        }
    }
    return min;
};