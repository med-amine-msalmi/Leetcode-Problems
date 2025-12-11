function climbStairs(n: number): number {
    if(n<2)
        return n;
    let climbs:number[]=[1,2];
    for(let i=2;i<n;i++){
        climbs.push(climbs[i-1]+climbs[i-2])
    }
    return climbs[climbs.length-1];
};
