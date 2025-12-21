function isPalindrome(s: string): boolean {
    function isAlphanumeric(char:string){
        return /[a-zA-Z0-9]/.test(char);
    }
let left=0;
let right=s.length-1;
while(left<right){
   if(!isAlphanumeric(s[left]))
        left++;
    else if(!isAlphanumeric(s[right]))
        right--;
    else {
        if(s[left].toLowerCase()!=s[right].toLowerCase()){
            console.log(left,s.length-right);
            return false;
        }
        right--;
        left++;
    }
}
return true;

};