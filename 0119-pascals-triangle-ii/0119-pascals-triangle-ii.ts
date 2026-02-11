function getRow(rowIndex: number): number[] {

    let pascalTriangle:number[][]=[];
    for(let c=0;c<=rowIndex;c++){
        let arrayOfRow:number[]=Array(c+1).fill(1);
        for(let k=1;k<c;k++){
            arrayOfRow[k]=pascalTriangle[c-1][k-1]+pascalTriangle[c-1][k];
        }
        if(c==rowIndex)
            return arrayOfRow;
        pascalTriangle.push(arrayOfRow);
    } 
};