
var TimeMap = function() {
    this.data = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.data[key] === undefined) this.data[key] = {};
    if (this.data[key][timestamp] === undefined) this.data[key][timestamp] = {};
    this.data[key][timestamp] = value;
    
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (this.data[key] === undefined) return "";
    
    while (timestamp > -1 && this.data[key][timestamp] === undefined) {
        timestamp -= 1;
    }
    
    return timestamp === -1 ? "" : this.data[key][timestamp];
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */