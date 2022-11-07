/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, k) {
    const res = [];
    const set = new Set();
    
    const dfs = (cur) => {
        if (cur.length === N) {
            const key = [...cur].join("");
            if (!set.has(key)) {
                set.add(key);
                res.push([...cur].join(""));
            }
            return;
        }

        if (cur.length === 0) {
            for (let i = 1; i <= 9; i += 1) {
                cur.push(i);
                dfs(cur);
                cur.pop();
            } 
        } else {
            const last = cur[cur.length - 1];
            
            if (0 <= last + k && last + k <= 9) {
                    set.add(last + k);
                    cur.push(last + k);

                    dfs(cur);

                    set.delete(last + k);
                    cur.pop();
            } 
            if (0 <= last - k && last - k <= 9) {
                    set.add(last - k);
                    cur.push(last - k);

                    dfs(cur);

                    set.delete(last - k);
                    cur.pop();
            }
        }
    }
    
    dfs([]);
    
    return res;
};