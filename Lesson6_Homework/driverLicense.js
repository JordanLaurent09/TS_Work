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
        // Создание основного контейнера с информацией
        let mainCardBody = document.createElement('div');
        mainCardBody.style.width = '600px';
        mainCardBody.style.margin = '0 auto';
        mainCardBody.style.display = 'flex';
        mainCardBody.style.flexDirection = 'column';
        mainCardBody.style.justifyContent = 'space-between';
        mainCardBody.style.alignItems = 'left';
        mainCardBody.style.border = '2px solid gray';
        // Создание картинки с автомобилем
        let carPicture = document.createElement('img');
        carPicture.src = '1967-mercury-cougar-xr-7.jpg';
        carPicture.style.width = '90%';
        carPicture.style.margin = '0 auto';
        mainCardBody.appendChild(carPicture);
        // Создание контейнера с информацией об автомобиле
        let carInfoContainer = document.createElement('div');
        carInfoContainer.style.width = '90%';
        carInfoContainer.style.margin = '0 auto';
        carInfoContainer.style.display = 'flex';
        carInfoContainer.style.flexDirection = 'column';
        carInfoContainer.style.justifyContent = 'left';
        // Создание параграфов с информацией об автомобиле
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
        // Создание контейнера с карточками о двигателе и о водителе
        let addCards = document.createElement('div');
        addCards.style.width = '90%';
        addCards.style.margin = '0 auto';
        addCards.style.display = 'flex';
        addCards.style.justifyContent = 'space-between';
        mainCardBody.appendChild(addCards);
        // Создание контейнера для двигателя
        let engineCard = document.createElement('div');
        engineCard.style.width = '45%';
        engineCard.style.display = 'flex';
        engineCard.style.flexDirection = 'column';
        engineCard.style.justifyContent = 'space-between';
        engineCard.style.alignContent = 'center';
        engineCard.style.border = '2px solid gray';
        let engineTitle = document.createElement('h2');
        engineTitle.textContent = 'Двигатель';
        engineTitle.style.margin = '0 auto';
        let enginePicture = document.createElement('img');
        enginePicture.src = 'car-engine.png';
        enginePicture.style.width = '100px';
        enginePicture.style.alignSelf = 'center';
        let enginePower = document.createElement('p');
        enginePower.textContent = `Мощность: ${this.engine.horses}`;
        enginePower.style.margin = '0 auto';
        let engineManuf = document.createElement('p');
        engineManuf.style.margin = '0 auto';
        engineManuf.textContent = `Производитель: ${this.engine.manufacturer}`;
        let isReady = document.createElement('p');
        isReady.style.margin = '0 auto';
        if (this.engine.isStarted === true) {
            isReady.textContent = `Состояние: Заведен`;
            isReady.style.color = 'green';
        }
        else {
            isReady.textContent = `Состояние: Заглох`;
            isReady.style.color = 'red';
        }
        engineCard.appendChild(engineTitle);
        engineCard.appendChild(enginePicture);
        engineCard.appendChild(enginePower);
        engineCard.appendChild(engineManuf);
        engineCard.appendChild(isReady);
        addCards.appendChild(engineCard);
        // Создание контейнера для водителя
        let driverCard = document.createElement('div');
        driverCard.style.width = '45%';
        driverCard.style.display = 'flex';
        driverCard.style.flexDirection = 'column';
        driverCard.style.justifyContent = 'space-between';
        driverCard.style.alignContent = 'center';
        driverCard.style.border = '2px solid gray';
        let driverTitle = document.createElement('h2');
        driverTitle.textContent = 'Водитель';
        driverTitle.style.margin = '0 auto';
        let driverPicture = document.createElement('img');
        driverPicture.src = 'driver.png';
        driverPicture.style.width = '100px';
        driverPicture.style.alignSelf = 'center';
        let driverName = document.createElement('p');
        driverName.textContent = `ФИО: ${this.driver.surname} ${this.driver.name} ${this.driver.patronymic}`;
        driverName.style.margin = '0 auto';
        let driverExperience = document.createElement('p');
        driverExperience.textContent = `Стаж: ${this.driver.driveExperience} лет`;
        driverExperience.style.margin = '0 auto';
        driverCard.appendChild(driverTitle);
        driverCard.appendChild(driverPicture);
        driverCard.appendChild(driverName);
        driverCard.appendChild(driverExperience);
        addCards.appendChild(driverCard);
        document.body.appendChild(mainCardBody);
    }
}
const card = new Car("Cougar Mercury 67", "Coupe", 2500, new Engine(50000, "USA", true), 1000, 200);
card.changeDriver(new Driver("Сергей", "Шураев", "Валентинович", 0));
card.draw();
