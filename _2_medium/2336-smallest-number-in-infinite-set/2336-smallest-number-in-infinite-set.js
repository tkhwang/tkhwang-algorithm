
var SmallestInfiniteSet = function() {
    const nums = Array(1000).fill(null).map((v,i) => i + 1);
    this.set = new Set(nums);
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    const min = Math.min(...this.set);
    this.set.delete(min);
    return min;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    this.set.add(num);
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */