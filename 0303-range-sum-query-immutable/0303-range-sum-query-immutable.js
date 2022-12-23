/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefixSum = Array(nums.length).fill(0);
    let sum = 0;
    for (const [ i, num ] of nums.entries()) {
        sum += num;
        this.prefixSum[i] = sum;
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.prefixSum[right] - (this.prefixSum[left - 1] || 0)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */