/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let res = 0;
    const N = functions.length;
    
	return function(x) {
        if (N === 0) return x;
        
        for (let i = N - 1; i >= 0; i -= 1) {
            const funct = functions[i];
            res = funct(res === 0 ? x : res);
        }
        return res;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */