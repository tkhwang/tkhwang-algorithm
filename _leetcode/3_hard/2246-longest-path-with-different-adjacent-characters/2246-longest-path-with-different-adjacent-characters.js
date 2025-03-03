/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
    const N = parent.length;
    
    const graph = Array(N).fill(null).map((_) => []);
    
    for (const [ cur, par ] of parent.entries()) {
        if (par === -1)  continue;
        
        graph[par].push(cur);
        graph[cur].push(par);
    }
    
    console.log(graph);
    let max = 1;
    
    const dfs = (cur, parent) => {
        if (graph[cur].length === 0) return 1;
        
        let longest = 0;
        let secondLongest = 0;
        
        for (const child of graph[cur]) {
            if (child === parent) continue;
            
            const childLength = dfs(child, cur);
            
            if (s[cur] === s[child]) continue;
            if (childLength > longest) {
                [ longest, secondLongest ] = [ childLength, longest ]
            } else if (childLength > secondLongest) {
                secondLongest = childLength;
            }
        }
        
        max = Math.max(
            max,
            longest + secondLongest + 1
        )
        
        return longest + 1;
    }

    dfs(0, -1);
    
    return max;
};