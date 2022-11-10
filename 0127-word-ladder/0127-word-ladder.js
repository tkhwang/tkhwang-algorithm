/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const queue = [ beginWord ];
    const set = new Set(wordList);
    const seen = new Set();
    seen.add(beginWord);
    
    let steps = 1;
    
    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();

            if (cur === endWord) return steps;
            
            for (let j = 0; j < cur.length; j += 1) {
                for (let k = 'a'.charCodeAt(0); k <= 'z'.charCodeAt(0); k += 1) {
                    if (cur[j] === String.fromCharCode(k)) continue;
                    
                    const newWord = cur.slice(0, j) + String.fromCharCode(k) + cur.slice(j+1);
                    if (!set.has(newWord)) continue;
                    if (seen.has(newWord)) continue;
                    
                    seen.add(newWord);
                    queue.push(newWord)
                }
            }
        }
        steps += 1;
    }
    
    return 0;
};