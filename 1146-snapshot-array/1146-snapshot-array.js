/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.curr = {};
    this.snaps = [];
    this.hasChanges = false;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.curr[index] = val;
    this.hasChanges = true;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    if (this.hasChanges || this.snaps.length  === 0) {
        this.snaps.push({...this.curr});
    } else {
        this.snaps.push(this.snaps[this.snaps.length - 1])
    }
    this.hasChanges = false;
    return this.snaps.length - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    return this.snaps[snap_id][index] || 0
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */