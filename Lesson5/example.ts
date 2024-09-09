class CPU {
    model: string;
    price: number;
    frequency: number;
    TDP: number;

    constructor(model: string, price: number, frequency: number, TDP: number) {
        this.model = model;
        this.price = price;
        this.frequency = frequency;
        this.TDP = TDP;
    }

    displaySelfInfo() {
        return `Информация о процессоре:
            \tМодель: ${this.model}
            \tЦена: ${this.price}
            \tЧастота: ${this.frequency}
            \tТепловыделение: ${this.TDP}
            `;
    }
}



class PC {
    model: string;
    price: number;
    CPU: CPU;

    constructor(model: string, price: number, CPU: CPU) {
        this.model = model;
        this.price = price;
        this.CPU = CPU;
    }

    displaySelfInfo() {
        console.log(
            `Информация о компьютере:
            Модель: ${this.model}
            ${this.CPU.displaySelfInfo()}
            Цена: ${this.price}
            `)
    }
}

const cpu: CPU = new CPU("Intel core i-5-12400K", 45000.00, 4200.00, 340)
const computer: PC = new PC("ASUS", 10000.00, cpu);

(computer.displaySelfInfo());


class Brain {

    weight: number;
    capacity: number;

    constructor(weight: number, capacity: number) {
        this.weight = weight;
        this.capacity = capacity;
    }
}

class Person {

    name: string;
    age: number;
    sex: string;
    brain: Brain;

    constructor(name: string, age: number, sex: string) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.brain = new Brain(2000, 3000);
    }

}

const man: Person = new Person("Tommy", 32, "male");



class CPPU {
    model: string;
    frequency: number;

    constructor(model: string, frequency: number) {
        this.model = model;
        this.frequency = frequency;
    }
}

class RAM {
    capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }
}

class VideoCard {

    model: string;

    constructor(model: string) {
        this.model = model;
    }
}

class MotherBoard {
    cpu: CPPU;
    ram: RAM;
    videoCard: VideoCard;

    constructor(cpu: CPPU, ram: RAM, videoCard: VideoCard) {
        this.cpu = cpu;
        this.ram = ram;
        this.videoCard = videoCard;
    }
}

const mommy: MotherBoard = new MotherBoard(new CPPU("Intel", 4200), new RAM(20000), new VideoCard("Videocard"));



