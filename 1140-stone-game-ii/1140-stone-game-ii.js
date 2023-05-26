/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
  const N = piles.length;
  const dp = Array.from(Array(N + 1), () => Array(2 * (N + 1)).fill(0));
  let sumTilEnd = 0, minOpponent;

  for (let i = N - 1; i >= 0; i--) {
    sumTilEnd += piles[i];
    for (let m = 1; m <= N; m++) {
      if (i + 2 * m >= N) {
        dp[i][m] = sumTilEnd;
        continue;
      }

      minOpponent = dp[i + 1][m];

      for (let x = 2; x <= 2 * m; x++) {
        minOpponent = Math.min(minOpponent, dp[i + x][Math.max(m, x)]);
      }

      dp[i][m] = sumTilEnd - minOpponent;
    }
  }

  return dp[0][1];    
};