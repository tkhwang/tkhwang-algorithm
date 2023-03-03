/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const ch2index = (ch, base = 'a') => ch.charCodeAt(0) - base.charCodeAt(0);
    const index2ch = (index, base = 'a') => String.fromCharCode(index + base.charCodeAt(0));

    const N = haystack.length;
    const NT = needle.length;
    
    const queue = new Queue();
    let target = 0;
    for (let i = NT - 1; i >= 0; i -=1) {
        target = target * 10 + ch2index(needle[i]);
    }
    
    let first = -1;
    let hash = 0;
    for (let i = N - 1; i >= 0; i -= 1) {
        const cur = haystack[i];
        queue.enqueue(cur);
        hash = 10 * hash + ch2index(cur);
        
        if (queue.size() < NT) continue;
        
        if (queue.size() > NT) {
            const oldest = queue.dequeue();
            hash -= ch2index(oldest) * 10 ** queue.size();
        }
        
        if (hash === target) first = i;
    }
    
    return first;
};