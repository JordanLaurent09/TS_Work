"use strict";
class Engine {
    constructor(horses, manufacturer, isStarted) {
        this.horses = horses;
        this.manufacturer = manufacturer;
        this.isStarted = isStarted;
    }
    displayInfo() {
        return `Краткая информация о двигателе: Мощность: ${this.horses} лошадиных сил, Изготовитель: ${this.manufacturer}, заведен ли двигатель: ${this.isStarted}`;
    }
}
class Driver {
    constructor(name, surname, patronymic, driveExperience) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.driveExperience = driveExperience;
    }
    displayInfo() {
        return `Краткая информация о водителе: Имя: ${this.name}, фамилия: ${this.surname}, отчество: ${this.patronymic}, стаж: ${this.driveExperience}`;
    }
}
class Car {
    constructor(model, range, weight, engine, gasTankVolume, fuelVolume) {
        this.model = model;
        this.range = range;
        this.weight = weight;
        this.engine = engine;
        this.gasTankVolume = gasTankVolume;
        this.fuelVolume = fuelVolume;
    }
    start() {
        if (this.engine.isStarted === false) {
            this.engine.isStarted = true;
        }
        else {
            console.log("Двигатель уже запущен, гражданин!");
        }
    }
    stop() {
        if (this.engine.isStarted === true) {
            this.engine.isStarted = false;
        }
        else {
            console.log("lol, you CANNOT to switch off already SWITCHED OFF engine! omg omg omg");
        }
    }
    refuel(gasolineAmount) {
        if (this.fuelVolume + gasolineAmount <= this.gasTankVolume) {
            this.fuelVolume += gasolineAmount;
        }
        else {
            console.log("WHAT.ARE.YOU.DOING.DUDE");
        }
    }
    changeDriver(newDriver) {
        this.driver = newDriver;
        console.log(`Happy journey, Mr. ${this.driver.surname}`);
    }
    displayInfo() {
        console.log(`Модель: ${this.model},
            Класс: ${this.range},
            Вес: ${this.weight},
            Объем бензобака: ${this.gasTankVolume},
            Запас топлива: ${this.fuelVolume},
            Инфо о двигателе: ${this.engine.displayInfo()}
            Инфо о водителе: ${this.driver.displayInfo()}
            `);
    }
    draw() {
        let mainCardBody = document.createElement('div');
        mainCardBody.style.width = '400px';
        mainCardBody.style.display = 'flex';
        mainCardBody.style.flexDirection = 'column';
        mainCardBody.style.justifyContent = 'space-between';
        let carPicture = document.createElement('img');
        carPicture.src = '1967-mercury-cougar-xr-7.jpg';
        carPicture.style.width = '350px';
        mainCardBody.appendChild(carPicture);
        let carInfoContainer = document.createElement('div');
        carInfoContainer.style.display = 'flex';
        carInfoContainer.style.flexDirection = 'column';
        carInfoContainer.style.justifyContent = 'left';
        let modelTitle = document.createElement('p');
        modelTitle.textContent = `Марка: ${this.model}`;
        let rangeTitle = document.createElement('p');
        rangeTitle.textContent = `Класс: ${this.range}`;
        let weightTitle = document.createElement('p');
        weightTitle.textContent = `Вес: ${this.weight}`;
        carInfoContainer.appendChild(modelTitle);
        carInfoContainer.appendChild(rangeTitle);
        carInfoContainer.appendChild(weightTitle);
        mainCardBody.appendChild(carInfoContainer);
        let addCards = document.createElement('div');
        addCards.style.width = '90%';
        addCards.style.margin = '0 auto';
        addCards.style.display = 'flex';
        addCards.style.justifyContent = 'space-evenly';
        mainCardBody.appendChild(addCards);
        let engineCard = document.createElement('div');
        engineCard.style.display = 'flex';
        engineCard.style.flexDirection = 'column';
        engineCard.style.justifyContent = 'space-between';
        engineCard.style.border = '2px solid 2px gray';
        let enginePower = document.createElement('p');
        enginePower.textContent = `Мощность: ${this.engine.horses}`;
        let engineManuf = document.createElement('p');
        engineManuf.textContent = `Производитель: ${this.engine.manufacturer}`;
        let isReady = document.createElement('p');
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
const card = new Car("Cougar Mercury 67", "Coupe", 2500, new Engine(50000, "USA", true), 1000, 200);
card.changeDriver(new Driver("Сергей", "Шураев", "Валентинович", 0));
card.draw();
