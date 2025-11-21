function dailyTemperatures(temperatures: number[]): number[] {
    const Stack:number[]=[];
    const output:number[]=[];
    for(let i:number=0;i<temperatures.length;i++){
        while(Stack.length && temperatures[i]>temperatures[Stack[Stack.length-1]]){
            output[Stack[Stack.length-1]]=i-Stack.pop();
            
        }
        
        Stack.push(i);
    }
    for(const n of Stack){
        output[n]=0;
    }
    return output;
};