const START = 1;
const END = -1;

var MyCalendarThree = function() {
    this.data = {};
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    this.data[start] = (this.data[start] || 0) + START;
    this.data[end] = (this.data[end] || 0) + END;
    
    let events = 0;
    let max = 0;
    
    for (const time of Object.keys(this.data)) {
        events += this.data[time];
        max = Math.max(max, events);
    }
    
    return max;
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */