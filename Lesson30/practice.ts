function AddMetadata(version: any, author: any) {
    return function(constructor: Function) {
        constructor.prototype.version = version;
        constructor.prototype.author = author;
    }
}


@AddMetadata({version: "1.0"}, {author: "Xenofont"})
class MyComponent {

}


/* const myClass: MyComponent = new MyComponent();

console.log((myClass as any).version);
console.log((myClass as any).author); */