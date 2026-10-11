function wordPattern(pattern: string, s: string): boolean {
    let words=s.split(" ");
    if(words.length!=pattern.length)
        return false;
    let map=new Map();
    let mappedWords=new Set();
    for(let i=0;i<pattern.length;i++){
        if(map.has(pattern[i]) && map.get(pattern[i]) != words[i])
            return false;
        if(!map.has(pattern[i]) && mappedWords.has(words[i]))
            return false;
        map.set(pattern[i],words[i])
        mappedWords.add(words[i])
    }
    return true;

};