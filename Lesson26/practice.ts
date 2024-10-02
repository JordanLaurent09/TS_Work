type Constructor<T = {}> = new (...args: any[]) => T;

function Chargeable<T extends Constructor>(base: T) {
    return class extends base {
        charge() {
            console.log("Заряжается...")
        }
    }
}

function Connectable<T extends Constructor>(base: T) {
    return class extends base {
        connect() {
            console.log("Подключено к сети");
        }
    }
}

class Device {


    turnOn() {
        console.log("You turn me on");
    }
}

class Smartphone extends Connectable(Chargeable(Device)) {};

let android: Smartphone = new Smartphone();

android.charge();
android.connect();
android.turnOn();


function Drivable<T extends Constructor>(base: T) {
    return class extends base {
        drive() {
            console.log("Едет...")
        }
    }
}

function Flyable<T extends Constructor>(base: T) {
    return class extends base {
        fly() {
            console.log("Летит...")
        }
    }
}

function Swimmable<T extends Constructor>(base: T) {
    return class extends base {
        swim() {
            console.log("Плывет...")
        }
    }
}

class Vehicle {

    startEngine() {
        
    }
}