// Интерфейс для метода 
/* interface IStringProcessor {
    (input: string): string
}


let makeBigLetters: IStringProcessor = (input: string): string  => {
    return input + "Привет";
} */

/* interface ICalculator {
    summ(first: number, second: number): number;
    substract(first: number, second: number): number;
}


let calculator: ICalculator =  {
    summ: (first: number, second: number): number => {
        return first + second;
    },

    substract: (first: number, second: number): number => {
        return first - second;
    }
} */
/* interface ICar {
    readonly provider: string;
    model: string;
    yearOfSales?: Date;
}


class Car implements ICar {
    readonly provider!: string;
    model!: string;
    yearOfSales?: Date;

    constructor(provider: string, model: string, yearOfSales: Date) {
        this.provider = provider;
        this.model = model;
        this.yearOfSales = yearOfSales;
    }
}

let carExample: ICar = new Car("Toyota", "Camry", new Date(2017, 12, 5));

let Car1: ICar = {
    provider: "Toyota",
    model: "Camry",
    yearOfSales: new Date(2017, 12, 5)
}

let Car2: ICar = {
    provider: "Honda",
    model: "Civic"
} */



class Driver {
    id!: number;
    name!: string;
    vehicleId!: number;
    currentTrip!: Trip;

    startTrip(trip: Trip): void {

    }

    endTrip(): void {

    }
}

class Vehicle {
    id!: number;
    type!: string;
    licensePlate!: string;
    available!: boolean;

    assingnDriver(driver: Driver): void {

    }

    unassignDriver(): void {

    }
}

class Trip {
    id!: number;
    driverId!: number;
    vehicleId!: number;
    startLocation!: string;
    endLocation!: string;
    startTime!: Date;
    endTime!: Date;

    start(): void {

    }

    end(): void {

    }
}

interface IIdentifier {
    id: number;
}

interface IDriving {
    driverId: number;
    vehicleId: number;
}

interface IGeo {
    startLocation: string;
    endLocation: string;
}

interface IDateTime {
    startTime: Date;
    endTime: Date;
}

interface ITotally extends IIdentifier, IDriving, IGeo, IDateTime {
    id: number;
    driverId: number;
    vehicleId: number;
    startLocation: string;
    endLocation: string;
    startTime: Date;
    endTime: Date;
}
