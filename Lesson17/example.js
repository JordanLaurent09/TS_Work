"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Geometry_1 = require("./Geometry");
const Algebra_1 = require("./Algebra");
let circle = new Geometry_1.Geometry.Circle(10);
console.log(circle.area());
let rectangle = new Geometry_1.Geometry.Rectangle(15, 20);
console.log(rectangle.area());
let roots = Algebra_1.Algebra.solveQuadratic(1, -3, 2);
console.log(roots[0]);
console.log(roots[1]);
/* namespace MyNameSpace {
    export class MyClass {
        public name: string;

        constructor(name: string) {
            this.name = name;
        }

        public greet(): string {
            return `Привет, ${this.name}`;
        }
    }

   export let instance = new MyClass('hello');
    
}

namespace OuterNamespace {
    export namespace InnerNamespace {
        export class InnerClass {
            public func(): void {

            }
        }
    }
}

let instance = MyNameSpace.MyClass;

let some = new OuterNamespace.InnerNamespace.InnerClass(); */ 
