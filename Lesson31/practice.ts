import 'reflect-metadata';

function GetMeta(target: any, propertyKey: string, parameterIndex: number) {
    const existingLoggedParameters: number[] = Reflect.getOwnMetadata('logParameters', target, propertyKey) || [];

    existingLoggedParameters.push(parameterIndex);

    Reflect.defineMetadata('logParameters', existingLoggedParameters, target, propertyKey);
}


function ValidateMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const method: any = descriptor.value;

    descriptor.value = function(...args: any[]) {
        let metadata: number[] = Reflect.getOwnMetadata('logParameters', target, key) || [];
        console.log(metadata[0])
        console.log(typeof metadata[0])
        if (args[metadata[0]] > 100 || args[metadata[0]] < 0) {
            throw new Error("You are unborn or reborn");
        }
        else {
            console.log(`Метод с именем ${key} первым аргументом имеет ${metadata[0]}, а вторым -  ${metadata[1]}`)
        }

        return method.apply(this, args);
    }

    return descriptor;
}




class Person {
    name: string;
    age: number;

    constructor(name, age) {
        this.name = name;
        this,age = age;
    }

    @ValidateMethod
    changePersonData(@GetMeta name: any, @GetMeta age: any) {
        this.name = name;
        this.age = age;
    }
}

let person: Person = new Person("Джонни", 21);

person.changePersonData("Томми", 111);