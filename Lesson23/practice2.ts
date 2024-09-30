function logFnctionCall<T extends (...args: any) => any>(fn: T) {
    
    return (...args: Parameters<T>) : ReturnType<T> => {
        console.log(args);
        console.log(new Date().toISOString());

        return fn(...args);
    }
}

function substract(a: number, b: number): number {
    return a - b;
}

let myFunction = logFnctionCall(substract);

console.log(myFunction(20, 2));