function singleNumber(nums: number[]): number {
    let set:Set<number>=new Set();
    for(let num of nums){
        if(set.has(num))
            set.delete(num)
        else
            set.add(num)
    }
    return [...set][0]
    
};