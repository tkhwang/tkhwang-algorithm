/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const N = nums.length;

    const smaller = nums.filter((num) => num < pivot);
    const larger = nums.filter((num) => num > pivot);
    const same = nums.filter((num) => num === pivot);

    return [
        ...smaller,
        ...same,
        ...larger
    ]
};