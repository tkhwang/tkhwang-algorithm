/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.segTree = new SegTree(nums);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    return this.segTree.update(index, val);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.segTree.sumRange(left, right);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
class SegTree {
    constructor(array) {
        this.N = array.length;
        this.segTree = Array(this.N * 2);
        this.build(array);
    }

    build(nums) {
      let j = 0;
      for (var i = this.N; i < this.N * 2; i++) {
        this.segTree[i] = nums[j];
        j++;
      }
      for (i = this.N - 1; i > 0; i--) {
        this.segTree[i] = this.segTree[i * 2] + this.segTree[i * 2 + 1];
      }        
    }

    update(index, val) {
      index += this.N;
      this.segTree[index] = val;
      while (index > 1) {
        let left = index, right = index;
        if (index % 2 === 0) {
          right = index + 1;
        } else {
          left = index - 1;
        }
        index = Math.floor(index / 2);
        this.segTree[index] = this.segTree[left] + this.segTree[right];
      }        
    }

    sumRange(left, right) {
        left += this.N;
        right += this.N;
        
        let sum = 0;
        while (left <= right) {
            if (left % 2 === 1) {
                sum += this.segTree[left];
                left++;
            }
            if (right % 2 === 0) {
                sum += this.segTree[right];
                right--;
            }
            left = Math.floor(left / 2);
            right = Math.floor(right / 2);
      }   
      return sum;
    };
}





