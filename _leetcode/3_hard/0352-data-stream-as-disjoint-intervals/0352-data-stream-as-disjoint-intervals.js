
var SummaryRanges = function() {
    this.obj = {};
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
    this.obj[value] = value;
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    const res = [];
    let interval = [];
    
    for (const num in this.obj) {
        if (interval.length === 0) interval.push(num);
        
        if (this.obj[+num + 1] === undefined) {
            interval.push(+num);
            res.push([...interval]);
            interval.length = 0;
        }
    }
    
    return res;
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */