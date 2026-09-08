function isHappy(n: number): boolean {
    let set=new Set();
    let SquaresSum=n;
    while(SquaresSum!=1){
        SquaresSum=[...SquaresSum.toString()].reduce((acc, curr) => {
    return acc + Math.pow(Number(curr), 2);
    }, 0)
    if(set.has(SquaresSum))
        return false;
     set.add(SquaresSum)

    
    }
    return true;
};