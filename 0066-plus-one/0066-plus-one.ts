function plusOne(digits: number[]): number[] {
    if(digits[digits.length-1]!=9){
        digits[digits.length-1]++;
        return digits;}
    let i=digits.length-1;
    while(digits[i]==9 && i>=0){
        digits[i]=0;
        i--;
    }
    if(i<0)
        digits.splice(i+1,0,1);
    else
        digits[i]++;
    return digits;
};