/* function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const original: any = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Метод ${key} вызван с аргументами ${args}`); // Новое поведение
        return original.apply(this, args);
    }
    return descriptor;
}

class MyClass {
    @LogMethod
    myMethod(arg1: number, arg2: string) {
        console.log(`Исполнение метода с ${arg1} и ${arg2}`);
    }
}

const instance: MyClass = new MyClass();
instance.myMethod(25, "Не хочу вспоминать этот возраст!"); */



    function RestrictionDeco(target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod: any = descriptor.value;

        const child: MyClass = target as MyClass; // чтобы не создавать "костыльную" надфункцию с isAdmin: Boolean
        descriptor.value = function (...args: any[]) {
            if (child.isAdmin) {
                throw new Error('Вы не администратор');
            }
            return originalMethod.apply(this, args);
        }
    }

class MyClass {
    isAdmin = true;
    @RestrictionDeco
    adminMethod() {
        console.log("Это доступно только админу");
    }
}

const myClass: MyClass = new MyClass();
myClass.adminMethod();


class Person {
    @Validate
    name: any;

    constructor(name: string) {
        this.name = name;
    }


}

let pers: Person = new Person("Valeryy");
pers.name = "Peter";

function Validate(target: any, key: string) {
    let value = target[key];

    const getter = () => value;
    const setter = (newValue: any) => {
        if (typeof newValue !== 'string') {
            throw new Error("Argument Exception");
        }

        value = newValue;
    }

    Object.defineProperty(target, key, {
        enumerable: false,
        configurable: true,
        get: getter,
        set: setter,
        writable: true
    })
}