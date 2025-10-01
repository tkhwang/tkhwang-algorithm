/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const N = nums.length;
    const M = k % N;

    const temp = [
        ...nums.slice(-M),
        ...nums.slice(0, -M)
    ]

    for (let i = 0; i < N; i += 1) {
        nums[i] = temp[i];
    }
};