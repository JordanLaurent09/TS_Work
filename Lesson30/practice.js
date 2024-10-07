"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AddMetadata(version, author) {
    return function (constructor) {
        constructor.prototype.version = version;
        constructor.prototype.author = author;
    };
}
let MyComponent = class MyComponent {
};
MyComponent = __decorate([
    AddMetadata({ version: "1.0" }, { author: "Xenofont" })
], MyComponent);
/* const myClass: MyComponent = new MyComponent();

console.log((myClass as any).version);
console.log((myClass as any).author); */ 
