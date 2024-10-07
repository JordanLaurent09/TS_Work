function Logger(constructor: Function) {
    console.log(`Записано название класса! Вот его значение: ${constructor.name}`);
}

function Metadata(something: any): any {
    return function(constructor: Function) {
        constructor.prototype.metadata = something;
    }
}

@Logger
@Metadata({role: "Who are you?"})
class Example {
    constructor(public name: string){}
}

const example: Example = new Example("No name");

console.log(example.name);
console.log((example as any).metadata);