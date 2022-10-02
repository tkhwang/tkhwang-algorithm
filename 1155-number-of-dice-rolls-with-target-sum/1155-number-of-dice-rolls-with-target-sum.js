/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    let search = function(i, sum, dp) {
        if( sum == target && i == n ) return 1;
        if( i == n ) return 0;
        if( sum >= target ) return 0;
        if( dp[i][sum] != -1 ) return dp[i][sum];
        
        var j, ans=0;
        
        for( j=1; j<=k; j++ ) {
            if( sum+j > target ) break;
            ans = (ans+search(i+1, sum+j, dp))%1000000007;
        }
        
        return dp[i][sum] = ans;
    }
    let dp = new Array(n);
    var i;
    for( i=0; i<n; i++ ) {
        dp[i] = new Array(target).fill(-1);
    }
    
    return search(0, 0, dp);
};