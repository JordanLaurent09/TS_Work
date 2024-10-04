/* let iterable: number[] = [10, 20, 30];

let iterator: Iterator<number> = iterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */

/* function* simpleGenerator(): Generator<number, void, unknown> {
    yield 1;
    yield 2;
    yield 3;
}

let gen: Generator<number, void, unknown> = simpleGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next()); */

/* 
function* countDown(start: number): Generator<number, void, unknown> {
    while (start > 0) {
        yield start;
        start--;
    }
}


let counter: Generator<number, void, unknown> = countDown(5);

console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next()); */

function* infiniteSequence(): Generator<number, void, string> { // проверить, что произойдёт
    let i = 0;

    while (true) {
        yield i++;
    }
}


function* fetchData(): Generator<any, void, unknown> {
    const data1 = yield fetch('https://jsonplaceholder.typicode.com/comments').then(responce => responce.json()).then (data => console.log(data));
    
    const data2 = yield fetch('https://jsonplaceholder.typicode.com/users').then(responce => responce.json()).then (data => console.log(data));
    
}

let fetcher: Generator<any, void, unknown> = fetchData();

fetcher.next();
console.log("************************************");
fetcher.next();