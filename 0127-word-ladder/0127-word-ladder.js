/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const queue = [ [ beginWord, 1] ];
    
    const seen = new Set();
    seen.add(beginWord);
    
    const candidates = new Set(wordList);
    
    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0; i < len; i += 1) {
            const [ cur, count ] = queue.shift();
            
            if (cur === endWord) return count;
            
            for (let i = 0; i < cur.length; i += 1) {
                for (let j = 0; j < 26; j += 1) {
                    const change = String.fromCharCode('a'.charCodeAt(0) + j);
                    if (change === cur[i]) continue;
                 
                    const changeWord = cur.substring(0, i) + change + cur.substring(i+1);
                    
                    if (!candidates.has(changeWord)) continue;
                    if (seen.has(changeWord)) continue;

                    seen.add(changeWord);
                    queue.push([ changeWord, count + 1 ]);
                }
            }
        }
    }
    
    return 0;
};