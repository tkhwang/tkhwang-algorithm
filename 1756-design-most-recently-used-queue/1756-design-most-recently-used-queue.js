/**
 * @param {number} n
 */
var MRUQueue = function(n) {
    this.array = Array(n).fill(null).map((v,i) => i + 1);
};

/** 
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function(k) {
    const pop = this.array[k - 1];
    this.array.splice(k - 1, 1);
    this.array.push(pop);
    return pop;
};

/** 
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */