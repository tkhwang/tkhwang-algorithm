class SparseVector {
    private nums: number[];
    private N: number;

    constructor(nums: number[]) {
        this.nums = nums;
        this.N = nums.length;
    }

	// Return the dotProduct of two sparse vectors
    dotProduct(vec: SparseVector): number {
        let result = 0;
		for (let i = 0; i < this.N; i += 1) {
            result += this.nums[i] * vec.nums[i];
        }
        return result;
    }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums1)
 * var ans = v1.dotProduct(v2)
 */