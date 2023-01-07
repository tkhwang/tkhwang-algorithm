/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(_gas, _cost) {
    const gas = [..._gas, ..._gas];
    const cost = [ ..._cost, ..._cost];
    
    const N = _gas.length;
    
    let cur = 0;
    let start = 0;
    
    for (let i = 0; i < 2 * N; i += 1) {
        const g = gas[i];
        const c = cost[i];
        
        cur += g;
        cur -= c;
        
        if (cur < 0) {
            start = i + 1;
            cur = 0;
        } else {
            if (i - start >= N) return start;
        }
    }
    return -1;
};