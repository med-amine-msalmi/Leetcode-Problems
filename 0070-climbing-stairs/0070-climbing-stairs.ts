function climbStairs(n: number): number {
    if(n<=3)
        return n;
    let twoBack=2;
    let oneBack=3
    for(let i=4;i<n;i++){
        let curr=oneBack;
        oneBack+=twoBack;
        twoBack=curr;
    }
    return twoBack+oneBack
};
