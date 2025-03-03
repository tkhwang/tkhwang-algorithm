/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const cities = new Set();

        for (const path of paths) {
            cities.add(path[0]);
        }

        for (const path of paths) {
            const dest = path[1];
            if (!cities.has(dest)) {
                return dest;
            }
        }

        return "";    
};