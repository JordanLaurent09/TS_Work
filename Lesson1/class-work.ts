// 1 Сложение чисел
function add(firstNumber: number, secondNumber: number) : number {
    return firstNumber + secondNumber;
}


// 2 приветствие
function greet(userName: string = "Безымянный"): void {
    console.log(`Hello, ${userName}!!!111`);
}


// 3 Вычисление факториала
function factorial(num: number) : number {
    if (num == 0 || num == 1) return 1;
    return factorial(num - 1) * num;
}


// 4 Проверка четности
function isEven(num: number) : boolean {
    if (num % 2 == 0) return true;
    return false;
}


// 5 Поиск максимального числа
function maxSeeking(firstNum: number, secondNum: number) : number {
    if (firstNum >= secondNum) return firstNum;
    return secondNum;
}

// 6 Обратная строка
function reverseString(line: string) : string {
    let revStr: string = '';
    for (let i = line.length - 1; i <= 0; i--) {
        revStr += line[i];
    }
    return revStr;
}

// 7 Сумма элементов массива
function sumArray(array: number[]): number {
    let sum: number = 0;

    for (let i = 0; i < array.length; i++) {
       sum += array[i];
    }

    return sum;
}

// 8 Проверка на палиндром
function isPalindrome(line: string) : boolean {
    
    if (line == reverseString(line)) return true;
    return false;
}

// 9 Возведение в степень массива
function power(...numbers: number[]) : number[] {
    let lastElement: number = numbers[numbers.length - 1];

    for (let i = 0; i < numbers.length; i++) {      
        numbers[i] = Math.pow(numbers[i], lastElement);
    }

    return numbers;
}

// 10 Поиск среднего значения
function average(numbers: number[]) : number {
    let amount: number = numbers.length;

    let sum = sumArray(numbers);

    return sum / amount;
}