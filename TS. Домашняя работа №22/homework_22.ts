// Задача 1. Преобразование всех свойств в функции, возвращающие их значения
interface User {
    id: number;
    name: string;
    age: number;
}


type ToFunctions<Type> = {
    [Property in keyof Type]: () => Type[Property];
}

type UserModified = ToFunctions<User>;


// Задача 2. Преобразование всех свойств в необязательные и readonly

interface Task {
    title: string;
    description: string;
    completed: boolean;
}

type OptionalReadonly<Type> = {
    readonly [Property in keyof Type]?: Type[Property] | undefined;
}

type OptionalReadonlyTask = OptionalReadonly<Task>;