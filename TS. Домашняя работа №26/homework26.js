"use strict";
function SpeakableMixin(base) {
    return class extends base {
        speak(textToSpeak) {
            console.log(textToSpeak);
        }
    };
}
function WalkableMixin(base) {
    return class extends base {
        walk() {
            console.log("Иду-гряду!");
        }
    };
}
function JumpableMixin(base) {
    return class extends base {
        jump() {
            console.log("Я прыгаю!");
        }
    };
}
function IntroducableMixin(base) {
    return class extends base {
        introduce(name) {
            console.log(`Привет! Меня зовут ${name}!`);
        }
    };
}
class Robot {
    constructor(name) {
        this._name = name;
    }
    get Name() {
        return this._name;
    }
}
class Bishop extends SpeakableMixin(WalkableMixin(JumpableMixin(IntroducableMixin(Robot)))) {
}
let bishop = new Bishop("Бишоп");
bishop.introduce(bishop.Name);
bishop.jump();
bishop.walk();
bishop.speak("Я сдам вас с потрохами в интересах моей корпорации! Вы должны трепетать...");
