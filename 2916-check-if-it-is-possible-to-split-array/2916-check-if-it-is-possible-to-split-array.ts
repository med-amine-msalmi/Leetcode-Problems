function canSplitArray(nums: number[], m: number): boolean {
    if (nums.length <= 2 || m === 1) return true;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] + nums[i] >= m) return true
    }
    
    return false
}