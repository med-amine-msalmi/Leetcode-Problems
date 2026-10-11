/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let arr=[];
    for(let i=s.length-1;i>=0;i--){
        arr.push(s[i])
    }
    arr.forEach((val,index)=>{
        s[index]=val;
    })
};