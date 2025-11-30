function addBinary(a: string, b: string): string {
    let i=a.length-1;
    let j=b.length-1;
    let carryOut=0;
    let output:string="";
    while(i>=0 || j>=0 || carryOut){
        let sum=0;
        if(i>=0){
            sum+=Number(a[i]);
            i--;
        }
        if(j>=0){
            sum+=Number(b[j]);
            j--;
        }
        sum+=carryOut;
        carryOut=Math.floor(sum/2);
        output=(sum%2)+output;
    }
    return output;
};