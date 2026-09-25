function findLHS(nums: number[]): number {
    let longestHS=0;
    let startedWindow=0
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        while(Math.abs(nums[i]-nums[startedWindow])>1){
            startedWindow++
        }
        if(Math.abs(nums[i]-nums[startedWindow])==1)
            longestHS=Math.max(longestHS,Math.abs(i-startedWindow)+1)
    }
    return longestHS;
};

//[1,2,2,3,3,3,4,4,5]