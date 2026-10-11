function findAndReplacePattern(words: string[], pattern: string): string[] {
    const areIsomorphic=(s:string,t:string)=>{
       if(s.length!=t.length)
        return false;
    let chars_set=new Map();
    let mapped_chars=new Set();
    for(let i=0;i<s.length;i++){
        if (chars_set.has(s[i]) && chars_set.get(s[i]) != t[i]  )
            return false;
        if(!chars_set.has(s[i]) && mapped_chars.has(t[i]))
            return false;
        chars_set.set(s[i],t[i])
        mapped_chars.add(t[i])

    }
    return true}
    let matchedPattern=words.filter((word)=>{
        return areIsomorphic(pattern,word)
    })
    return matchedPattern;
   
};