/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
    const N = ideas.length;

    const set = new Set(ideas);
    
    const ch2num = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);
    const num2ch = (index) => String.fromCharCode(index + 'a'.charCodeAt(0));
    
    const good = Array(26).fill(null).map((_) => Array(26).fill(0));
    
    for (const idea of ideas) {
        const ai = ch2num(idea[0]);
        
        for (let bi = 0; bi < 26; bi += 1) {
            const newIdea = "" + num2ch(bi) + idea.slice(1);
            if (!set.has(newIdea)) good[ai][bi] += 1;
        }
    }
    
    let count = 0;
    for (let ai = 0; ai < 26; ai += 1) {
        for (let bi = 0; bi < 26; bi += 1) {
            count += good[ai][bi] * good[bi][ai];
        }
    }
    
    return count;
};