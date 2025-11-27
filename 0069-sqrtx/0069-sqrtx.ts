function mySqrt(x: number): number {
    let left=1;
    let right=x;
    while(left<=right){
    let sqrtX=left+Math.floor((right-left)/2);
       if(sqrtX*sqrtX==x)
            return sqrtX;
        if(sqrtX*sqrtX>x)
            right=sqrtX-1;
        else
            left=sqrtX+1;
    }
    return right;
};