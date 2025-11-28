/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    if(m===0){
     nums2.map((element)=>{nums1[m++]=element})
     return;
    }
    let currentIndex=nums1.length-1;
    let i=m-1;
    let j=n-1;
    while(i>=0 && j>=0){
        if(nums1[i]>=nums2[j]){
            nums1[currentIndex]=nums1[i];
            i--;
        }
        else{
            nums1[currentIndex]=nums2[j];
            j--;
        }
        currentIndex--;
    }
    if(j>=0){
        console.log(currentIndex);
        for(let count=j;count>=0;count--){
            nums1[currentIndex]=nums2[count];
            currentIndex--;
        }
    }
};