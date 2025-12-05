function multiply(nums1: string, nums2: string): string {
    let result:number[]=new Array(nums1.length+nums2.length).fill(0);
    for(let i=nums1.length-1;i>=0;i--){
        for(let j=nums2.length-1;j>=0;j--){
            result[i+j+1]+=Number(nums2[j])*Number(nums1[i]);
            if(result[i+j+1]>=10){
                result[i+j]+=Math.floor(result[i+j+1]/10);
                result[i+j+1]%=10;
                }
        }
    }
    let multStr="";
    let skip=true;
    for(const digit of result){
        if(skip && digit==0) 
            continue
        skip=false;
        multStr+=digit;
    }
    if(multStr=="")
        return "0";
    return multStr;
};