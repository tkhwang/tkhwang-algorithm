
var MyCalendar = function() {
    this.data = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for (const [ st, ed ] of this.data) {
        if (start < ed && st < end) return false;
    }
    
    this.data.push([ start, end ]);
    
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */