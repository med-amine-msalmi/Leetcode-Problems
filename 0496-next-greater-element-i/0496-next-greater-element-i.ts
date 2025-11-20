function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let ans:number[]=[];
    for(let i of nums1){
        let j=nums2.indexOf(i);
        console.log(j);
        if(j==nums2.length)
        {
            ans.push(-1);
        }
        while(j<nums2.length){
            j++;
            if(nums2[j]>i){
                ans.push(nums2[j]);
                break;
            }
        }
        if(j==nums2.length)
            ans.push(-1);
    }
    
    return ans;
};