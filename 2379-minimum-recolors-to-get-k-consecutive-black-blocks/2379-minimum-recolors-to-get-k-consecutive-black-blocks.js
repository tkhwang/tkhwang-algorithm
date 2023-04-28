/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    const N = blocks.length;
    
    let min = Infinity;
    let left = 0;
    let change = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = blocks[right];
        if (cur === "W") change += 1;
        while (right - left + 1 >= k) {
            if (min > change) min = change;
            const leftCh = blocks[left];
            if (leftCh === "W") change -= 1;
            left += 1;
        }
    }
    return min;
};