function isSubsequence(s: string, t: string): boolean {

    let counter=0;
    for(let i=0;i<t.length;i++){
        if(counter==s.length)
            return true;
        if(s[counter]==t[i])
            counter++
    }
    return counter==s.length;

};