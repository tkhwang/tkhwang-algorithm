/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
    events.sort((a, b) => a[0] - b[0]);
    const N = events.length;
    const dp = Array(k+1).fill(null).map((_) => Array(N).fill(-1));

    const dfs = (cur, count, prev) => {
        if (cur == N || count == k) 
            return 0

        if (events[cur][0] <= prev) 
            return dfs(cur + 1, count, prev)

        if (dp[count][cur] != -1) 
            return dp[count][cur]

        return dp[count][cur] = Math.max(
            dfs(cur + 1, count, prev), 
            dfs(cur + 1, count + 1, 
            events[cur][1]) + events[cur][2]
        )
    }

    return dfs(0,0,-1)
};