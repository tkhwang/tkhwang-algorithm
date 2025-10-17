/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    const N = nums.length;
    
    const map = new Map();
    for (const [ index, num ] of nums.entries()) {
        if (!map.has(num)) map.set(num, []);
        map.get(num).push(index);
    }

    const answer = [];

    const binarySearch = (array, target) => {
        let left = 0;
        let right = array.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (array[mid] === target) return mid;
            else if (array[mid] < target) {
                left = mid + 1;
            } else if (array[mid] > target) {
                right = mid - 1;
            }
        }
        return -1;
    }

    for (let q of queries) {
        const targetValue = nums[q];
        const indices = map.get(targetValue);
        
        if (indices.length === 1) {
            answer.push(-1);
            continue;
        }
        
        const pos = binarySearch(indices, q);
        
        const prevIdx = indices[(pos - 1 + indices.length) % indices.length];
        const nextIdx = indices[(pos + 1) % indices.length];
        
        const distPrev = Math.min(
            (q - prevIdx + N) % N,
            (prevIdx - q + N) % N
        );
        const distNext = Math.min(
            (nextIdx - q + N) % N,
            (q - nextIdx + N) % N
        );
        
        answer.push(Math.min(distPrev, distNext));
    }
    
    
    return answer;
};