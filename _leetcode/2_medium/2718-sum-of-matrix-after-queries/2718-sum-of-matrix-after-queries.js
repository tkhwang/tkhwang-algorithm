/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function(N, queries) {
    let seen_c = new Set();
    let len_seen_c = 0;
    let seen_r = new Set();
    let len_seen_r = 0;
    let q = [...queries];
    let res = 0;

    while (q.length && (len_seen_c < N || len_seen_r < N)) {
      let [t, i, v] = q.pop();
      
      if (t === 0) { // row
        if (!seen_r.has(i)) {
          res += v * (N - len_seen_c);
          seen_r.add(i);
          len_seen_r++;
        }
      } else { // col
        if (!seen_c.has(i)) {
          res += v * (N - len_seen_r);
          seen_c.add(i);
          len_seen_c++;
        }
      }
    }

    return res;    
};