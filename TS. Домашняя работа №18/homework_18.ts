type Comparable = number | string | boolean | Car;


function findMax<T extends Comparable>(array: T[], compareFunc?: (a: T, b: T) => number): T {
    let max: T = array[0];
    
    if (compareFunc) {
        for (let i = 0; i < array.length; i++) {
            if(compareFunc(array[i], max) > 0) {
                max = array[i];
            }    
        }
    }
    else if (typeof(max) == 'string' || typeof(max) == 'number' || typeof(max) == 'boolean') {
        for (let i = 1; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
    }
    
    return max;
}

let numberMaximum: number = findMax([3,5,0,11,23,6,2,24,27]);
let stringMaximum: string = findMax(['skies', 'forest', 'waterfall', 'Sekeshfehervar']);
let carMaximum: Car = findMax([{brand: 'Mitsubishi', price: 20000}, {brand: 'Mercedes', price: 21000}, {brand: 'Cougar', price: 22000}], (a, b) => a.price - b.price);

console.log(numberMaximum);
console.log(stringMaximum); 
console.log(carMaximum); 


type Car = {
    brand: string;
    price: number;
};