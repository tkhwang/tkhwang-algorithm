/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
    let visited = new Map();

    let MOD = 7 + 10 ** 9;

    const genKey = (current, fuel) => `${current}:${fuel}`
    
    const dfs = (current, fuel) => {
        let id = genKey(current, fuel);

        if (!visited.has(id)) {
            let paths = 0;

            if (current === finish) paths++;
            for (let i = 0; i < locations.length; i++) {
                if (i !== current) {
                    let remaining = fuel - Math.abs(locations[current] - locations[i]);
                    if (remaining >= 0) {
                        paths += dfs(i, remaining);
                    }
                }
            }
            visited.set(id, paths % MOD)
        }

        return visited.get(id);
    }

    return dfs(start, fuel);    
};