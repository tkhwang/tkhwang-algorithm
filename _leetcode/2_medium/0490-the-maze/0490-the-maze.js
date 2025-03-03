/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
    const [ ROWS, COLS ] = [ maze.length, maze[0].length ];
    
    const seen = Array(ROWS).fill(null).map((_) => Array(COLS).fill(false));

    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => {
        if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return false;
        if (maze[r][c] === 1) return false;
        return true;
    }
    const genKey = (r,c) => `${r}:${c}`    
    
    const dfs = (r, c) => {
        if (r === destination[0] && c === destination[1]) {
            return true;
        }

        if (seen[r][c]) return;
        seen[r][c] = true;
        
        for (const [ dR, dC ] of directions) {
            let newR = r + dR;
            let newC = c + dC;
            
            if (!isValid(newR, newC)) continue;
            
            while (isValid(newR, newC)) {
                newR += dR;
                newC += dC;
            }
            
            newR -= dR;
            newC -= dC;
            
            if (dfs(newR, newC)) return true;
        }
        return false;
    }
    
    return dfs(start[0], start[1])
};