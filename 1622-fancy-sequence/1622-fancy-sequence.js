const MOD = 7 +10 ** 9;

var Fancy = function() {
    this.array = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
Fancy.prototype.append = function(val) {
    this.array.push(val);
};

/** 
 * @param {number} inc
 * @return {void}
 */
Fancy.prototype.addAll = function(inc) {
    for (let i = 0; i < this.array.length; i += 1) {
        this.array[i] = this.array[i] + inc;
    }
};

/** 
 * @param {number} m
 * @return {void}
 */
Fancy.prototype.multAll = function(m) {
    for (let i = 0; i < this.array.length; i += 1) {
        this.array[i] = (this.array[i] * m) % MOD;
    }
};

/** 
 * @param {number} idx
 * @return {number}
 */
Fancy.prototype.getIndex = function(idx) {
    return this.array[idx] || -1;
};

/** 
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */