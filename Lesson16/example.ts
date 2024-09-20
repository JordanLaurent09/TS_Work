class KeyValuePair<TKey, TValue> {
    private _key: TKey;
    private _value: TValue;

    constructor(key: TKey, value: TValue) {
        this._key = key;
        this._value = value;
    }

    public get Key(): TKey {
        return this._key;
    }

    public set Value(value: TValue) {
        this._value = value;
    }

}

class Dictionary<TKey, TValue> {
    private _pairs: KeyValuePair<TKey, TValue>[];

    constructor() {
        
    }

    constructor(pairs: KeyValuePair<TKey, TValue>[]) {
        this._pairs = pairs;
    }

    public inject(newKeyValuePair: KeyValuePair<TKey, TValue>): void {
        if (!this._pairs.includes(newKeyValuePair)) {
            this._pairs.push(newKeyValuePair);
        }
        else {
            console.log("Don't do that!");
        }
    }

    public annihilate(uselessKeyValuePair: KeyValuePair<TKey, TValue>): void {
        if (this._pairs.includes(uselessKeyValuePair)) {
            this._pairs = this._pairs.filter(function(everyPair) {
                return everyPair != uselessKeyValuePair;
            })
        }
        else {
            console.log("You can't annihilate that lost pair - that absence is so evident!");
        }
    }

}

let dict: Dictionary<string, number> = new Dictionary<string, number>();