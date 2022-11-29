
var RandomizedSet = function() {
    this.map = new Map();
    this.array = [];
    this.index = 0;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;
    
    this.array[this.index] = val;
    this.map.set(val, this.index);
    this.index += 1;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;
    
    // this.array : deletingIndex(old) ... this.index-1(last) this.index
    // this.map   : 

    const deletingIndex = this.map.get(val);
    const overwritingVal = this.array[this.index - 1];
    const overwritingIndex = this.map.get(overwritingVal);
    
    [ this.array[deletingIndex], this.array[overwritingIndex] ] = [ this.array[overwritingIndex], this.array[deletingIndex] ];
    this.map.set(overwritingVal, deletingIndex);
    this.map.delete(val);
    this.index -= 1;
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.index);
    return this.array[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */