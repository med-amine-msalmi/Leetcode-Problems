function removeDuplicates(nums: number[]): number {
    let j=1;
    let i=1;
    while(j<nums.length){
        if(nums[j]!=nums[j-1]){
            nums[i]=nums[j];
            i++;
        }
        j++;
    }
    return i;
};