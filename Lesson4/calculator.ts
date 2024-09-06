class Calculator {
    add(first: number, second: number): number;
    add(first: string, second: string): string;
    add(first: any, second: any): any {
        return first + second;
    }
}

const calc: Calculator = new Calculator();
/* calc.add() */


class Counter {
    countValue: number;

    constructor(countValue: number) {
        this.countValue = countValue;
    }


    addCount(): number;
    addCount(customNumber: number): number;
    addCount(userNumber?: number) : number {
        if (userNumber === undefined) {
            return this.countValue++;
        }
        else {
            return this.countValue+=userNumber;
        }
    }


    reduceCount(): number;
    reduceCount(customNumber: number): number;
    reduceCount(userNumber?: number) : number {
        if (userNumber === undefined) {
            return this.countValue--;
        }
        else {
            return this.countValue-=userNumber;
        }
    }

    drop(): void {
        this.countValue = 0;
    }

   
}

const counter: Counter = new Counter(20);

counter.addCount();

console.log(counter.countValue);




class ToDoList {
    businessList: Array<string>;

    constructor() {
        this.businessList = new Array<string>();
    }


    addTask(newTask: string): void {

    }

}