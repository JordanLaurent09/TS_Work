class MyClass {
    static field: number;
    static getStaticField(): void {
        console.log(MyClass.field);
    }
}

let first: MyClass = new MyClass();
MyClass.field = 0;


class ArrayUtils {

    public static sortArray(array: Array<number>) : Array<number> {
        return array.sort();
    }

    public static maxValue(array: Array<number>): number {
        let max: number = array[0];
        for (let i = 1; i < array.length - 1; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        return max;
    }

    public static minValue(array: Array<number>): number {
        let min: number = array[0];
        for (let i = 1; i < array.length - 1; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    }

    public static averageValue(array: Array<number>): number {
        let len: number = array.length;
        let sum: number = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            
        }
        return sum / len;
    }

    public static filterBy(array: Array<number>): Array<number> {

        return array.filter(function(value) {
            return value % 2 == 0;
        })
    }

    public static removeSameElements(array: Array<number>): Set<number> {

        let set: Set<number> = new Set<number>();

        for (let i = 0; i < array.length; i++) {
            set.add(array[i]);           
        }
        return set;
    }



    public static BogdanMethod(array: Array<number>, predicate: (condition: number) => boolean): Array<number> {
        let newArr: Array<number> = new Array<number>();
        array.forEach(element => {
            if (predicate(element)) {
                newArr.push(element);
            }
        });

        return newArr;
    }


}