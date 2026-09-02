function lengthOfLongestSubstring(s: string): number {
        let max=0;
       for(let i=0;i<s.length;i++){
        let uniqueChar=new Set();
        for(let j=i;j<s.length;j++){
            if(uniqueChar.has(s[j]))
                break;
            uniqueChar.add(s[j]);
            max=Math.max(max,uniqueChar.size);
        }
       }
       return max;
}
