type Numberizer<T> = T extends string ? number : never;


type KeyIterator<T extends {}> = {
    [Property in keyof T]: Numberizer<T[Property]>; 
}

interface Example {
    name: string;
    age: number;
    phone: string;
    email: string;
    height: number;
}

type NumberizedExample = KeyIterator<Example>;