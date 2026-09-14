function titleToNumber(columnTitle: string): number {
     return [...columnTitle].reverse().reduce((acc,curr,index)=>{
        return acc + Math.pow(26,index)*(curr.charCodeAt(0)-64)
    },0)
   
};