/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const N = nums.length;

    const rotated = Array(N).fill(0);

    for (let i = 0; i < N; i += 1) {
        rotated[(i + k) % N] = nums[i];
    }

    for (let i = 0; i < N; i += 1) {
        nums[i] = rotated[i];
    }
};