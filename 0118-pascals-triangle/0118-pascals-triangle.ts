function generate(numRows: number): number[][] {

    let output:number[][]=[];

    for(let c=0;c<numRows;c++){
        const arrayOfRow:number[]=Array(c+1).fill(1);
        for(let k=1;k<c;k++){
            arrayOfRow[k]=output[c-1][k]+output[c-1][k-1];
        }
        
        output.push(arrayOfRow)
    }
    return output;
};