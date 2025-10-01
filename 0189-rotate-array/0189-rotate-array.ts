/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const N = nums.length;
    k = k % N;

    const reverse = (array, left, right) => {
        while (left < right) {
            [ array[left], array[right] ] = [ array[right], array[left] ];
            left += 1;
            right -= 1;
        }
    }

    reverse(nums, 0, N - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, N - 1);
};