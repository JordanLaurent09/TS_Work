class Car {
    model: string;
    year: number;

    constructor(outerModel: string, outerYear: number) {
        this.model = outerModel;
        this.year = outerYear;
    }
}

const car1: Car = new Car("Cougar Mercury", 1967);
const car2: Car = new Car("ГАЗ", 1967);