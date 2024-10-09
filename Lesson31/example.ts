import 'reflect-metadata';

/* function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
} */

function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
    const existingLoggedParameters: number[] = Reflect.getOwnMetadata('logParameters', target, propertyKey) || [];

    existingLoggedParameters.push(parameterIndex);

    Reflect.defineMetadata('logParameters', existingLoggedParameters, target, propertyKey)
}

function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod: any = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const loggedParameters: number[] = Reflect.getOwnMetadata('logParameters', target, key) || [];

        // Логируем значение параметров
        loggedParameters.forEach(index => {
            const parametrValue = args[index];
            console.log(`Метод ${key}, Индекс параметра: ${index}, Значение параметра: ${parametrValue}`);
        });

        return originalMethod.apply(this, args);
    }

    return descriptor;
}


class ExampleClass {
    @LogMethod
    public greet(@LogParameter message: string, @LogParameter name: string): void {
        console.log(`${name} написал сообщение: "${message}"`);
    }
}

const ex: ExampleClass = new ExampleClass();
ex.greet("Привет, друг", "Иван");