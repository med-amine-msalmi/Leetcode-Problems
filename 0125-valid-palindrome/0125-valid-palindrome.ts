function isPalindrome(s: string): boolean {
let result="";
for(let char of s){
    if(/[a-zA-Z0-9]/.test(char))
        result+=char.toLowerCase()
    }
let left=0;
let right=result.length-1;
console.log(result);
while(left<right){
    if(result[left]!=result[right])
        return false;
    left++;
    right--;
}
return true;

};