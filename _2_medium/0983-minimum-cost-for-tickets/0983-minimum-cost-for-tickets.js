/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const N = days.length;
    
    const maxDay = Math.max(...days);
    const set = new Set(days);
    const cache = {};
    const dfs = (day) => {
        if (day <= 0) return 0
        if (cache[day] !== undefined) return cache[day];
    
        if (set.has(day)) {
            const ticket1  = costs[0] + dfs(day - 1);
            const ticket7  = costs[1] + dfs(day - 7);
            const ticket30 = costs[2] + dfs(day - 30);

            return cache[day] = Math.min(ticket1, ticket7, ticket30);
        }
        return cache[day] = dfs(day - 1);
    }
    
    return dfs(maxDay)
};