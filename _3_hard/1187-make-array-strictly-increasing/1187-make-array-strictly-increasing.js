/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
    const binarySearch = (arr, target) => {
        let l = 0, r = arr.length, mid;
        while (l < r) {
            mid = (l + r) >> 1;
            arr[mid] > target ? r = mid : l = ++mid;
        }
        return l;
    }
    
    const N1 = arr1.length;
    const N2 = arr2.length;

    arr2.sort((a,b) => a - b);
    
    const genKey = (i, prv) => `${i}:${prv}`;
    const cache = {};
    
    const dp = (i, prv) => {
        if (i === N1) return 0;
        const key = genKey(i, prv);
        if (cache[key] !== undefined) return cache[key];
        
        let cost = Infinity;
        
        if (prv < arr1[i]) {
            cost = dp(i + 1, arr1[i]);
        }
        
        const index = binarySearch(arr2, prv);
        
        if (index < N2) {
            cost = Math.min(cost, 1 + dp(i + 1, arr2[index]))
        }
        
        return cache[key] = cost;
    }
    

    const res = dp(0, -1);
    
    return res === Infinity ? -1 : res;
};