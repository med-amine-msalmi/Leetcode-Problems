/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    function swipeValuesInArray(i1,v1,i2,v2){
        let reservedVal=v1;
        s[i1]=v2;
        s[i2]=reservedVal;
    }
    let left=0;
    let right=s.length-1;
    while(left<right){
        swipeValuesInArray(left,s[left],right,s[right])
        left++
        right--
    }
    
};