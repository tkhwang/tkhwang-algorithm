/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    const N = grid.length;
    if (grid[N - 1][N - 1] === 1 || grid[0][0] === 1) return 0;

    const dist = computeDistanceGrid(grid);
    const pq = new MaxPriorityQueue({ priority: x => x[0] });
    const vis = Array.from({ length: N }, () => Array(N).fill(false));

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    pq.enqueue([dist[0][0], 0, 0]);
    vis[0][0] = true;

    while (!pq.isEmpty()) {
        const [ds, i, j] = pq.dequeue().element;

        if (i === N - 1 && j === N - 1) return ds;

        for (const [dx, dy] of directions) {
            const newRow = i + dx;
            const newCol = j + dy;
            if (isValid(newRow, newCol, N) && grid[newRow][newCol] !== 1 && !vis[newRow][newCol]) {
                vis[newRow][newCol] = true;
                const ds1 = dist[newRow][newCol];
                pq.enqueue([Math.min(ds, ds1), newRow, newCol]);
            }
        }
    }

    return 0;
};

function isValid(x, y, n) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

function computeDistanceGrid(grid) {
    const N = grid.length;
    const distGrid = Array.from({ length: N }, () => Array(N).fill(Infinity));
    const q = [];
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === 1) {
                q.push([i, j]);
                distGrid[i][j] = 0;
            }
        }
    }

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    while (q.length > 0) {
        const [x, y] = q.shift();
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (isValid(newX, newY, N) && distGrid[newX][newY] === Infinity) {
                distGrid[newX][newY] = distGrid[x][y] + 1;
                q.push([newX, newY]);
            }
        }
    }

    return distGrid;
}