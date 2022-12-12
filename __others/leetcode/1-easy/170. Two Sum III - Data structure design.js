/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
  this.stack = [];
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  this.stack.push(number);
  // this.stack.sort((a,b) => a - b);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  let left = 0,
    right = this.stack.length - 1;
  const hash = {};

  for (let i = 0; i < this.stack.length; i += 1) {
    if (hash.hasOwnProperty(value - this.stack[i])) return true;
    else {
      hash[this.stack[i]] = this.stack[i];
    }
  }
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
