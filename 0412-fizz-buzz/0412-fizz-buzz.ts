function fizzBuzz(n: number): string[] {
    let output:string[]=[];
    for(let counter=1;counter<n+1;counter++){
        let str="";
        let isDevided:boolean=false;
        if(counter%3==0){
            str+="Fizz";
            isDevided=true;
        }
        if(counter%5==0){
            str+="Buzz";
             isDevided=true;
        }
        if(!isDevided){
        str=counter.toString();}
        output.push(str);
    }
    return output;
};