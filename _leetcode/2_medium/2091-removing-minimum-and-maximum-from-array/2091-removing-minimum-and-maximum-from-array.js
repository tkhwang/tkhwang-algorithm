/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    const N = nums.length;
    
    if (N === 1) return 1;
    
    const min = Math.min(...nums);
    const minIndex = nums.indexOf(min);
    
    const max = Math.max(...nums);
    const maxIndex = nums.indexOf(max);

    console.log(min, minIndex);
    console.log(max, maxIndex);
    
    let minCount = Infinity;

    // left
    minCount = Math.min(
        minCount,
        Math.max(minIndex, maxIndex) + 1
    )
    console.log("left:", Math.max(minIndex, maxIndex) + 1)
    
    // right
    minCount = Math.min(
        minCount,
        N - 1 - Math.min(minIndex, maxIndex) + 1
    )
    console.log("right:", N - 1 - Math.min(minIndex, maxIndex) + 1);
    
    // both
    minCount = Math.min(
        minCount,
        Math.min(minIndex, maxIndex) + 1 + N - 1 - Math.max(minIndex, maxIndex) + 1
    )
    console.log("both:", Math.min(minIndex, maxIndex) + 1 + N - 1 - Math.max(minIndex, maxIndex) + 1)
    
    return minCount;
};