function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const stack:number[]=[];
    const map=new Map<number,number>();
    for(const n of nums2){
        while(stack.length && n>stack[stack.length-1]){
            map.set(stack.pop(),n)
        }
        stack.push(n);
    }
    for(const n of stack){
        map.set(n,-1);
    }
    return nums1.map(element=>map.get(element))

};