function findTheDifference(s: string, t: string): string {
    const occurence=new Map();
    [...s].map((c)=>{
        if(!occurence.has(c))
            return occurence.set(c,1)
        return occurence.set(c,occurence.get(c)+1)
    })
  
    for( let c of t){
        if(! occurence.has(c) || occurence.get(c) < 1)
            return c;
        occurence.set(c,occurence.get(c)-1);
    }
};