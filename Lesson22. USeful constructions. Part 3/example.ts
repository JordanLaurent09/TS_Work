type Cat = {
    name: string;
    breed: string;
}

type OnlyNumbersOrCats = {
    [key: string]: number | Cat | 'hello'
}

const some: OnlyNumbersOrCats = {
    kittens: 10,
    adultCat: 5,
    cat1: {
        name: "Barsik",
        breed: 'Siamese'
    },
    cat2: {
        name: "Barsik",
        breed: 'Siamese'
    },
    word: 'hello'
}

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
}

type Settings = {
    autoSave: () => void;
    notifications: () => void;
}

type SettingsOptions = OptionsFlags<Settings>;