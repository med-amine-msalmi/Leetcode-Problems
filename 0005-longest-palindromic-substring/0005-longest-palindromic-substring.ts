function longestPalindrome(s: string): string {

   let maxLength=0;
   let subString="";
       for(let i=0;i<s.length;i++){
            let left=i ;let right= i
            while(left>=0 && right<s.length && s[left]==s[right]){
                if(right-left+1 > maxLength){
                    maxLength=right-left
                    subString=s.slice(left,right+1)
                    console.log(maxLength,subString)
                }
                left--;
                right++;
            }
             left=i+1 ;  right=i
              while(left>=0 && right<s.length && s[left]==s[right]){
                if(right-left+1 > maxLength){
                    maxLength=right-left+1
                    subString=s.slice(left,right+1)
                }
                left--;
                right++;
            }

        
    }

 return subString;
};