function getRow(rowIndex: number): number[] {

    let row:number[]=Array(rowIndex+1).fill(0);
    row[0]=1;
    for(let c=1;c<=rowIndex;c++){
        for(let k=c;k>0;k--){
            row[k]+=row[k-1];
        }
    }
    return row;
};