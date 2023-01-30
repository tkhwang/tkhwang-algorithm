/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.keyToFreqMap = new Map();
  this.freqToKeyMap = new Map();
  this.keyToValMap = new Map();
  this.capacity = capacity;
  this.leastFreq = 0;    
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (this.keyToValMap.has(key)) {
        this.leastFreq = freqAddOne(this.keyToFreqMap, this.freqToKeyMap, key, this.leastFreq);
        return this.keyToValMap.get(key);
      } else {
        return -1;
      }    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (this.capacity > 0) {

    if (this.keyToValMap.size >= this.capacity && !this.keyToValMap.has(key)) {
      // Step 1: figure which one is the least frequenty used
      var leastFreqSet = this.freqToKeyMap.get(this.leastFreq)
      // Since set is inserted according insertion order, the head of the set must be the least recently used item
      var leastUsedKey = leastFreqSet.values().next().value;
      
      // remove it from all our maps
      leastFreqSet.delete(leastUsedKey);
      if (leastFreqSet.size === 0) {
        this.freqToKeyMap.delete(this.leastFreq);
        // Since the last entry on the leastFreq set is removed, so the next leastFreq will be +1 from current
        this.leastFreq++;
      }
      this.keyToFreqMap.delete(leastUsedKey);
      this.keyToValMap.delete(leastUsedKey);
    }
    // We haven't seen this before, so leastFreq will be set back to 1
    if (!this.keyToValMap.has(key)) {
      this.leastFreq = 1;
    }
    // update our leastFreq count
    this.leastFreq = freqAddOne(this.keyToFreqMap, this.freqToKeyMap, key, this.leastFreq);
    this.keyToValMap.set(key, value);
  }
};

function freqAddOne(keyToFreqMap, freqToKeyMap, key, leastFreq) {
  // Add this key to our cache
  // update keyToFreqMap
  var freq = keyToFreqMap.get(key) + 1 || 1;
  keyToFreqMap.set(key, freq);

  // update freqToKeyMap
  if (freq > 1) {
    var oldFreq = freq - 1;
    var oldFreqSet = freqToKeyMap.get(oldFreq);
    oldFreqSet.delete(key);
    if (oldFreqSet.size === 0) {
      freqToKeyMap.delete(oldFreq)
      if (oldFreq === leastFreq) leastFreq++;
    }
  }
  var set = freqToKeyMap.get(freq) || new Set();
  set.add(key);
  freqToKeyMap.set(freq, set);
  return leastFreq;
}

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */