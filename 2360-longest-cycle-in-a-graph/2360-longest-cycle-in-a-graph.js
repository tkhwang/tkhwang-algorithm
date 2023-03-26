/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {    
let n = edges.length
    let visit = Array(n).fill(-1)
    let cycles = []
    for (let start=0; start<n; start++){
        let cur = start
        while(edges[cur] != -1){
            if (visit[cur] == start) { 
                cycles.push(cur)
                break
            } else if (visit[cur] == -1) {
                visit[cur] = start
            } else {
                break
            }
            cur = edges[cur]
        }
    }
    let maxcycle = -1
    for( c of cycles) {
        let cur = edges[c]
        let len = 1
        while (cur!=c){
             cur = edges[cur]
             len++
        }
         maxcycle = Math.max(maxcycle, len)
    }
    return maxcycle
};