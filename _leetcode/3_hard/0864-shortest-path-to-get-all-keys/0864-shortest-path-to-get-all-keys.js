/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
    const hash = char => 1 << ((char.charCodeAt() & 31) - 1);
    const isKey = char => /[abcdef]/.test(char);
    const isLock = char => /[ABCDEF]/.test(char);
    const canOpen = (keys, lock) => keys & hash(lock) ? true : false;
    
    const h = grid.length;
    const w = grid[0].length;
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const queue = new Queue();
    const visited = Array.from(Array(h), () => Array.from(Array(w), () => []));
    
    let keyCount = 0;
    for (let r = 0; r < h; ++r) {
        for (let c = 0; c < w; ++c) {
            if (grid[r][c] === '@') queue.enqueue([r, c, 0, 0]);
            else if (isKey(grid[r][c])) ++keyCount;
        }
    }
    
    const fullKeyChain = 2**keyCount - 1;
    while (!queue.isEmpty()) {
        let [r, c, d, keys] = queue.dequeue();
        if (r < 0 || c < 0 || r === h || c === w) continue;
        if (visited[r][c][keys] || grid[r][c] === '#') continue;
        visited[r][c][keys] = true;
        if (isLock(grid[r][c]) && !canOpen(keys, grid[r][c])) continue;
        if (isKey(grid[r][c])) keys |= hash(grid[r][c]);
        if (keys === fullKeyChain) return d;
        for (const [rr, cc] of dirs) queue.enqueue([r + rr, c + cc, d + 1, keys]);
    }   
    
    return -1;    
};