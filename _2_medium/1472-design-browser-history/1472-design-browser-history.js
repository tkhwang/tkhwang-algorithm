/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [];
    this.future = [];
    this.current = homepage;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history.push(this.current);
    this.current = url;
    this.future.length = 0;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while (steps >0 && this.history.length > 0) {
        this.future.push(this.current);
        this.current = this.history.pop();
        steps -= 1;
    }
    return this.current;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while (steps > 0 && this.future.length > 0) {
        this.history.push(this.current);
        this.current = this.future.pop();
        steps -= 1;
    }
    return this.current;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */