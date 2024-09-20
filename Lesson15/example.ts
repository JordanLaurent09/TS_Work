function identity<T>(arg: T) {
    return arg;
}

let numberOutput: number = identity<number>(34);
let stringOutput: string = identity<string>("Yes, I understand");

function getFirstElement<ArrType>(arr: ArrType[]): ArrType {
    let value: ArrType = arr[0];
    return value;
}
console.log(getFirstElement([1,2,3,4,5]));

function summ<T>(first: T, second: T) {
    return first;
}

/* function dictionary<TKey, TValue>(key: TKey, value: TValue) {
    return {key, value};
} */

/* function dictionary<TKey, TValue>(keyValuePair: {key: TKey, value: TValue}): {key: TKey, value: TValue} {
    return {
        key: keyValuePair.key,
        value: keyValuePair.value
    }
} */

function dictionary<TKey, TValue>(keyValuePair: {key: {name: TKey, age: TValue}, value: TValue}): {key: {name: TKey, age: TValue}, value: TValue} {
    return {
        key: {name: keyValuePair.key.name,
        age: keyValuePair.key.age},

        value: keyValuePair.value
        
    }
}


//let dict = dictionary<string, number>("index", 25);

/* console.log(typeof(dict.key));
console.log(typeof(dict.value)); */

function bubbleSort<ArrType>(arr: ArrType[]): ArrType[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[i] >= arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


console.log(bubbleSort<string>(["happiness", "luck", "Bogdan", "Metallica", "Roland Ironfist", "Archibald Ironfist"]));

function minValue<ArrType>(arr: ArrType[]): ArrType {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (min >= arr[i]) {
            min = arr[i];
        }
    }

    return min;
}

function maxValue<ArrType>(arr: ArrType[]): ArrType {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max <= arr[i]) {
            max = arr[i];
        }
    }

    return max;
}

console.log(maxValue<number>([5,1,9,11,0,33,2,-23]));


function ChoiceSort<ArrType>(arr: ArrType[]): ArrType[] {

    let magicNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        magicNumber = i;

        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] >= arr[j]) {
                magicNumber = j;
            }
        }

        
    }


    return arr;
}