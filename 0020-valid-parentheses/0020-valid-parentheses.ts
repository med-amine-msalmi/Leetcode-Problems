function isValid(s: string): boolean {
    let stack: string[] = [];
    for(let c of s){
        if(c === '(' || c === '{' || c === '[') stack.push(c)
        else{
            if(stack.length === 0 || 
            (c === ')' && stack.pop() !== '(') ||
            (c === '}' && stack.pop() !== '{') ||
            (c === ']' && stack.pop() !== '[') 
            ) return false
        }
    }
    return stack.length === 0
};