
var StockSpanner = function() {
    this.data = [];
    this.index = -1;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.data.push(price);
    this.index += 1;
    
    let i = this.index - 1;
    
    while (i >= 0 && this.data[i] <= price) {
        i -= 1;
    }
    return this.index - i;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */