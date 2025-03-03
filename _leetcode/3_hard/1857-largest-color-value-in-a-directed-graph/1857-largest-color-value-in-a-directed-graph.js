/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
    const N = colors.length;
    const visited = Array(N).fill(0);
    const maxCount = Array(N).fill(0).map(_=>Array(26).fill(0));
    const adj = Array(N).fill(0).map(_=>[]);
    
    const dfs = (node, colorsCount) => {
      const cur = colors[node].charCodeAt()-97;
      if(!visited[node]){
        visited[node] = 1;
        for(const next of adj[node]){
          if(dfs(next, colorsCount) === Infinity){
            return Infinity;
          }
          for(let k=0; k<26; k++){
            maxCount[node][k] = Math.max(maxCount[node][k], maxCount[next][k]);
          }
        }
        maxCount[node][cur]++;
        visited[node] = 2;
      }
      return visited[node] === 2 ? maxCount[node][cur] : Infinity;
    }    
    
    for(const [u, v] of edges){
      adj[u].push(v);
    }
    
    let res = 0;
    for(let i = 0; i < N; i += 1){
      res = Math.max(res, dfs(i, maxCount));
    };

    return res === Infinity ? -1 : res;
};
