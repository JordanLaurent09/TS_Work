type Constructor<T = {}> = new (...args: any[]) => T;

function SpeakableMixin<T extends Constructor>(base: T) {
    return class extends base {
        speak(textToSpeak: string) {
            console.log(textToSpeak);
        }
    }
}

function WalkableMixin<T extends Constructor>(base: T) {

    return class extends base {
        walk() {
            console.log("Иду-гряду!")
        }
    }
}

function JumpableMixin<T extends Constructor>(base: T) {
    return class extends base {
        jump() {
            console.log("Я прыгаю!");
        }
    }
} 

function IntroducableMixin<T extends Constructor>(base: T) {
    return class extends base {
        introduce(name: string) {
            console.log(`Привет! Меня зовут ${name}!`);
        }
    }
}

class Robot {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public get Name() {
        return this._name;
    }
}

class Bishop extends SpeakableMixin(WalkableMixin(JumpableMixin(IntroducableMixin(Robot)))) {}
let bishop = new Bishop("Бишоп");
bishop.introduce(bishop.Name);
bishop.jump();
bishop.walk();
bishop.speak("Я сдам вас с потрохами в интересах моей корпорации! Вы должны трепетать...");