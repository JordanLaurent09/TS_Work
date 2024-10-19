import 'reflect-metadata';


function ValidateSql(target: any, propertyKey: string, parameterIndex: number) {

    const existingLoggedParameters: number[] = Reflect.getOwnMetadata('logParameters', target, propertyKey) || [];

    existingLoggedParameters.push(parameterIndex);
    
    Reflect.defineMetadata('logParameters', existingLoggedParameters, target, propertyKey);

}

function LogExecution(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const intruderDetector = /\bselect\b|\bfrom\b|\bwhere\b|\bset\b|\bupdate\b|\bdelete\b/i;
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const loggedParameters: number[] = Reflect.getOwnMetadata('logParameters', target, propertyKey) || [];

        loggedParameters.forEach(index => {
            const parameterValue = args[index];

            if (intruderDetector.test(parameterValue)) {
                console.warn("You have entered restricted area!");
                throw new Error("SQL-injection detected!");
            }
            
            console.log(`Метод: ${propertyKey} Индекс параметра: ${index} Значение параметра: ${parameterValue}`);
        });

        return originalMethod.apply(this, args);
    }

    return descriptor;
}



class Person {
    name: string;
    age: number;
    weakData!: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @LogExecution
    setWeakData(@ValidateSql weakData: string): void {
        this.weakData = weakData;
    }
}

let person: Person = new Person("lol", 11);

try {
    person.setWeakData('update values where name=user');
} catch (e: any) {
    console.error(e.message);
}