function isPalindrome(s: string): boolean {
    function isAlphanumeric(char: string): boolean {
        const pattern=/[a-zA-Z0-9]/;
        return pattern.test(char)
    }
let result="";
for(let char of s){
    if(isAlphanumeric(char))
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