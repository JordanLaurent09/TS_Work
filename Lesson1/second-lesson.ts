function add(a: number, b: number) : number {
    return a + b;
}

function greet(name?: string) : void {
    console.log(`Привет ${name}`)
}

function greet2(name: string = 'Гость', counter: number = 0): string {
    return `Гость: ${name} по счету:${counter}`;
}

// функция с params
function sum(...numbers: number[]) : number {
    let sum: number = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];       
    }

    return sum;
}

function createFullName(fullName: string) : string;
function createFullName(firstName: string, SecondName: string, PatronymicName: string) : string;
function createFullName(fullName: string, firstName?: string, lastName?: string) : string {
    if (firstName != undefined && lastName != undefined) {
        return `${firstName} ${lastName}`
    } else {
        return fullName;
    }
}


// стрелочные функции
let summator = (a: number, b: number): number => a + b;