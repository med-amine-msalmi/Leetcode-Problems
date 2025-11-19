function countAlternatingSubarrays(nums: number[]): number {
    let left = 0;
    let ans = nums.length; // all individual elements are an answer
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            ans += i-left;
        } else {
            left = i;
        }
    }
    return ans;
};