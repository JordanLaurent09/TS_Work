/* // Mixin
type Constructor<T = {}> = new (...args: any[]) => T;

function Jumpable<T extends Constructor>(base: T) {
    return class extends base {
        jump() {
            console.log('Leap of FAITH');
        }
    }
}

class Chicken {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
     
    run() {
        console.log("Реализую бег");
    }

    
} */