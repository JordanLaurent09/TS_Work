class MyList<T> {

    private _innerArray: T[] = [];

    // добавление элементов
    public add(newItem: T): void {
        if (newItem != null || newItem != undefined) {
            this._innerArray.push(newItem);
        }
    }

    // удаление элементов
    public remove(deprecateItem: T): void {
        if (deprecateItem != null || deprecateItem != undefined) {
            if (this._innerArray.includes(deprecateItem)) {
                let deprecatedIndex = this._innerArray.lastIndexOf(deprecateItem);
                let firstIndex = 0;
                let temp = this._innerArray[deprecatedIndex];
                this._innerArray[deprecatedIndex] = this._innerArray[firstIndex];
                this._innerArray[firstIndex] = temp;
                this._innerArray.shift();                
            }
        }
    }

    // методы max/min
    public max(): T {
        let max = this._innerArray[0];
        for (let i = 0; i < this._innerArray.length; i++) {
            if (max < this._innerArray[i]) {
                max = this._innerArray[i];
            }
        }
        return max;
    }

    public min(): T {
        let min = this._innerArray[0];
        for (let i = 0; i < this._innerArray.length; i++) {
            if (min > this._innerArray[i]) {
                min = this._innerArray[i];
            }
        }
        return min;
    }

    // Метод count

    public count(predicate: (condition: T) => boolean): number {
        let count = 0;
        this._innerArray.forEach(element => {
            if (predicate(element)) {
                count++;
            }
        });

        return count;
    }

    // Метод reverse

    public reverse(): void {
        let reverseArray: T[] = [];

        for (let i = this._innerArray.length - 1; i >= 0; i--) {
            reverseArray.push(this._innerArray[i]);
        }

        this._innerArray = reverseArray;
    }

    // Метод divide

    public divide(parts: number): T[] {
        let outerArray: any[] = [];
        let innerArray: T[] = [];
        let partCapacity = Math.ceil(this._innerArray.length / parts);

        for (let i = 0; i < this._innerArray.length; i+=partCapacity) {
            for (let j = i; j < i + partCapacity; j++) {
                if (this._innerArray[j] != undefined) {
                    innerArray.push(this._innerArray[j]);
                }
            }
            outerArray.push(innerArray);
            innerArray = [];
        }

        return outerArray;
    }
}

let myList: MyList<number> = new MyList<number>();

myList.add(2);
myList.add(18);
myList.add(2);
myList.add(44);
myList.add(21);
myList.add(2);
myList.add(8);

console.log(myList);

myList.remove(44);
myList.remove(2);

console.log(myList);

console.log(myList.count(element => element == 2));

myList.reverse();

console.log(myList);

console.log(myList.divide(2));