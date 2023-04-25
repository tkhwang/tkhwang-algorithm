/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.queue = [];
    this.freq = {};
    for (const num of nums) {
        this.freq[num] = (this.freq[num] || 0) + 1;
        if (this.freq[num] === 1) this.queue.push(num);
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    for (let i = 0; i < this.queue.length; i += 1) {
        const cur = this.queue[i];
        if (this.freq[cur] === 1) return cur;
    }
    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    this.freq[value] = (this.freq[value] || 0) + 1;
    if (this.freq[value] === 1) this.queue.push(value);
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */