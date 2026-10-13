class TimeLimitedCache {
     cachedValue:Map<number,any[]>;
    constructor() {
        this.cachedValue=new Map<number,any[]>();
    }
    set(key: number, value: number, duration: number): boolean {
        let resultStatus:boolean=false;
        if(this.cachedValue.has(key)){
            clearTimeout(this.cachedValue.get(key)[1])
            resultStatus=true;}
        let timer=setTimeout(()=>{
            this.cachedValue.delete(key)
            },duration)
            this.cachedValue.set(key,[value,timer])
        return resultStatus;
    }
    get(key: number): number {
    if(this.cachedValue.has(key))
        return this.cachedValue.get(key)[0]  
    return -1;
    }
    
    count(): number {
        return this.cachedValue.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */