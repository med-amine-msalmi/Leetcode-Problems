function sortedSquares(nums: number[]): number[] {
    let left=0;
    let right=nums.length-1;
    let output:number[]=[];
    for(let counter=nums.length-1;counter>=0;counter--){
        if(Math.abs(nums[left])<Math.abs(nums[right]))
            {
                output[counter]=Math.pow(nums[right],2);
                right--;
            }
        else{
            output[counter]=Math.pow(nums[left],2);
            left++;
        }
    }
    return output;
};