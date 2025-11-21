function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const Stack:number[]=[];
    const map=new Map<number,number>();
    for(const n of nums2){
        while(Stack.length && n>Stack[Stack.length-1]){
            map.set(Stack.pop(),n);
        }
        Stack.push(n);
    }
    for(const n of Stack){
        map.set(n,-1);
    }

    const ans=nums1.map(element=>map.get(element));
    return ans;
};