function findLHS(nums: number[]): number {
    let longestHS=0
    let map=new Map();
    for(let n of nums){
        if(!map.has(n)) map.set(n,1)
        else { map.set(n,map.get(n)+1)}
        let predecessor=n-1;
        let successor=n+1
        if(map.has(predecessor) ){
            longestHS=Math.max(longestHS,map.get(n) + map.get(predecessor))
        }
        if(map.has(successor)){
            longestHS=Math.max(longestHS,map.get(n)+map.get(successor))
        }
    }  
    return longestHS;  
}

