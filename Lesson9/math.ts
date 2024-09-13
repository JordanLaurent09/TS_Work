export class Summator {


    public sum(valueOne: number, valueTwo: number): number {
        return valueOne + valueTwo;
    }
}

export class Multiplier {

    public multyply(valueOne: number, valueTwo: number): number {
        return valueOne * valueTwo;
    }
}

export class Divider {
    public divide(valueOne: number, valueTwo: number): number {
        if (valueTwo !== 0) {
            return valueOne / valueTwo;
        }
        return 0;
    }
}
