class Engine {
    horses: number;
    manufacturer: string;
    isStarted: boolean;

    constructor(horses: number, manufacturer: string, isStarted: boolean) {
        this.horses = horses;
        this.manufacturer = manufacturer;
        this.isStarted = isStarted;
    }

    displayInfo(): string {
        return `Краткая информация о двигателе: Мощность: ${this.horses} лошадиных сил, Изготовитель: ${this.manufacturer}, заведен ли двигатель: ${this.isStarted}`;
    }
}

class Driver {
    name: string;
    surname: string;
    patronymic: string;
    driveExperience: number;

    constructor(name: string, surname: string, patronymic: string, driveExperience: number) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.driveExperience = driveExperience;
    }

    displayInfo(): string {
        return `Краткая информация о водителе: Имя: ${this.name}, фамилия: ${this.surname}, отчество: ${this.patronymic}, стаж: ${this.driveExperience}`;
    }
}

class Car {
    model: string;
    range: string;
    weight: number;
    driver!: Driver;
    engine: Engine;
    gasTankVolume: number;
    fuelVolume: number;

    constructor(model: string, range: string, weight: number, engine: Engine, gasTankVolume: number, fuelVolume: number) {
        this.model = model;
        this.range = range;
        this.weight = weight;
        this.engine = engine;
        this.gasTankVolume = gasTankVolume;
        this.fuelVolume = fuelVolume;
    }


    start(): void {
        if (this.engine.isStarted === false) {
            this.engine.isStarted = true;
        }
        else {
            console.log("Двигатель уже запущен, гражданин!");
        }
    }

    stop(): void {
        if (this.engine.isStarted === true) {
            this.engine.isStarted = false;
        }
        else {
            console.log("lol, you CANNOT to switch off already SWITCHED OFF engine! omg omg omg");
        }
    }

    refuel(gasolineAmount: number): void {
        if (this.fuelVolume + gasolineAmount <= this.gasTankVolume) {
            this.fuelVolume += gasolineAmount;
        }
        else {
            console.log("WHAT.ARE.YOU.DOING.DUDE");
        }
    }

    changeDriver(newDriver: Driver): void {
        this.driver = newDriver;
        console.log(`Happy journey, Mr. ${this.driver.surname}`);
    }

    displayInfo(): void {
        console.log(
            `Модель: ${this.model},
            Класс: ${this.range},
            Вес: ${this.weight},
            Объем бензобака: ${this.gasTankVolume},
            Запас топлива: ${this.fuelVolume},
            Инфо о двигателе: ${this.engine.displayInfo()}
            Инфо о водителе: ${this.driver.displayInfo()}
            `
        );
    }

    draw(): void {
        let mainCardBody: HTMLDivElement = document.createElement('div');
        mainCardBody.style.width = '400px';
        mainCardBody.style.display = 'flex';
        mainCardBody.style.flexDirection = 'column';
        mainCardBody.style.justifyContent = 'space-between';

        let carPicture: HTMLImageElement = document.createElement('img');
        carPicture.src = '1967-mercury-cougar-xr-7.jpg';
        carPicture.style.width = '350px';

        mainCardBody.appendChild(carPicture);

        let carInfoContainer: HTMLDivElement = document.createElement('div');
        carInfoContainer.style.display = 'flex';
        carInfoContainer.style.flexDirection = 'column';
        carInfoContainer.style.justifyContent = 'left';

        

        let modelTitle: HTMLParagraphElement = document.createElement('p');
        modelTitle.textContent = `Марка: ${this.model}`;
        let rangeTitle: HTMLParagraphElement = document.createElement('p');
        rangeTitle.textContent = `Класс: ${this.range}`;
        let weightTitle: HTMLParagraphElement = document.createElement('p');
        weightTitle.textContent = `Вес: ${this.weight}`;

        carInfoContainer.appendChild(modelTitle);
        carInfoContainer.appendChild(rangeTitle);
        carInfoContainer.appendChild(weightTitle);


        mainCardBody.appendChild(carInfoContainer);



        let addCards: HTMLDivElement = document.createElement('div');
        addCards.style.width = '90%';
        addCards.style.margin = '0 auto';
        addCards.style.display = 'flex';
        addCards.style.justifyContent = 'space-evenly';

        mainCardBody.appendChild(addCards);


        let engineCard: HTMLDivElement = document.createElement('div');
        engineCard.style.display = 'flex';
        engineCard.style.flexDirection = 'column';
        engineCard.style.justifyContent = 'space-between';

        engineCard.style.border = '2px solid 2px gray';


        let enginePower: HTMLParagraphElement = document.createElement('p');
        enginePower.textContent = `Мощность: ${this.engine.horses}`;
        let engineManuf: HTMLParagraphElement = document.createElement('p');
        engineManuf.textContent = `Производитель: ${this.engine.manufacturer}`;
        let isReady: HTMLParagraphElement = document.createElement('p');

        if (this.engine.isStarted === true) {
            isReady.textContent = `Состояние: Заведен`;
            isReady.style.color = 'green';
        }
        else {
            isReady.textContent = `Состояние: Заглох`;
            isReady.style.color = 'red';
        }

        engineCard.appendChild(enginePower);
        engineCard.appendChild(engineManuf);
        engineCard.appendChild(isReady);

        addCards.appendChild(engineCard);

        document.body.appendChild(mainCardBody);

    }


}

const card: Car = new Car("Cougar Mercury 67", "Coupe", 2500, new Engine(50000, "USA", true), 1000, 200);

card.changeDriver(new Driver("Сергей", "Шураев", "Валентинович", 0));

card.draw();