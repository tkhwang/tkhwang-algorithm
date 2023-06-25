/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function(rods) {
    let dp = {0:0}

    for(let rod of rods){
        let currentDP = {...dp}
        for(let height in currentDP){
            height = parseInt(height)
            dp[height + rod] = Math.max(dp[height + rod] || 0, currentDP[height])
            dp[Math.abs(height-rod)] = Math.max(dp[Math.abs(height-rod)] || 0, currentDP[height] + Math.min(height,rod))
        }
    }
    return dp[0] || 0
};