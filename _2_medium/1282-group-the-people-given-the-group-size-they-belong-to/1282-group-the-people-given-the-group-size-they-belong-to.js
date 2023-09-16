/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const N = groupSizes.length;
    
    const temp = {}
    const res = [];
    
    for (let i = 0; i < N; i += 1) {
        const cur = groupSizes[i];
        if (temp[cur] === undefined) temp[cur] = [];
        temp[cur].push(i);
        
        if (temp[cur].length === cur) {
            res.push([...temp[cur]]);
            temp[cur] = [];
        }
    }
    
    return res;
};