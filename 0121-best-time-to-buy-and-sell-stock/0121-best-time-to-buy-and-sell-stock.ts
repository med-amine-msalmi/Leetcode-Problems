function maxProfit(prices: number[]): number {
   let maxProfit:number =0;
   let startDateStock=prices[0];
   for(let element of prices){
   let diff=element-startDateStock;
    if( diff< 0){
        startDateStock=element;
    }
    maxProfit=Math.max(maxProfit,diff);
        }
   return maxProfit;
};