type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timerID;
    return function(...args) {
       if(timerID){

             timerID=clearTimeout(timerID);
       }
             timerID= setTimeout(fn,t,...args)
             return timerID;
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */