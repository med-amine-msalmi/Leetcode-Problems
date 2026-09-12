class MyStack {
     
     queue:number[]
     size:number;
    constructor() {
   
        this.queue=[]
        this.size=0;
    }
    push(x: number): void {
        this.queue.push(x)
        this.size++;
    }
    
    pop(): number {
        for (let i = 0; i < this.size - 1; i++) {
        this.queue.push(this.queue.shift()!)
        }
        this.size--;
    return this.queue.shift()!
    }
    top(): number {
        if(this.size<0)
            return undefined
        for (let i = 0; i < this.size - 1; i++) {
             this.queue.push(this.queue.shift()!)
        }
        let pop=this.queue[0];
        this.queue.push(this.queue.shift()!)
        return pop;

    }

    empty(): boolean {
      return  this.size===0;
    }
}

/**

 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()

 */