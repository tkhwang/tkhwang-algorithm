/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
        const calculate_cost = (l) => {
            let total_cost = 0;
            for (let i = 0; i < nums.length; i++) {
                total_cost += Math.abs(l - nums[i]) * cost[i];
            }
            return total_cost;
        }
  
        let left = Math.min(...nums);
        let right = Math.max(...nums) + 1;
        let mid = Math.floor((left + right) / 2);
        
        while (left < right) {
            if (calculate_cost(mid) < calculate_cost(mid + 1)) {
                right = mid;
            } else {
                left = mid + 1;
            }
            mid = Math.floor((left + right) / 2);
        }
        
        return calculate_cost(left);
    
};