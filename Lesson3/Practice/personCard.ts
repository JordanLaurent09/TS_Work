class Person {
    name: string;
    age: number;
    height: number;
    phoneNumber: string;
    imagePath: string

    constructor(name: string, age: number, height: number, phoneNumber: string, imagePath: string) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.phoneNumber = phoneNumber;
        this.imagePath = imagePath;
    }
}


const concretePerson: Person = new Person("Peter", 25, 200, "9828378", "chelovek.png");


const card: HTMLElement = document.createElement('div');

card.style.width = '200px';

card.style.margin = '0 auto';

card.style.display = 'flex';
card.style.flexDirection = 'column';
card.style.justifyContent = 'center';
card.style.alignItems = 'center';
card.style.textAlign = 'center';

card.style.border = '6px solid gray';
card.style.boxShadow = '20px 20px';


const picture: HTMLImageElement = document.createElement('img');
picture.src = concretePerson.imagePath;
picture.style.width = '200px';

const itsname: HTMLParagraphElement = document.createElement('p');
itsname.textContent = `${concretePerson.name}`;
itsname.style.fontWeight = 'bold';
itsname.style.lineHeight = '2px';

const itsage: HTMLParagraphElement = document.createElement('p');
itsage.textContent = `Возраст: ${concretePerson.age}`;
itsage.style.lineHeight = '0.5px';
itsage.style.marginBottom = '0';

const itsheight: HTMLParagraphElement = document.createElement('p');
itsheight.textContent = `Рост: ${concretePerson.height}`;
itsheight.style.lineHeight = '0.5px';
itsheight.style.marginBottom = '0';

const itsPhone: HTMLParagraphElement = document.createElement('p');
itsPhone.textContent = `Телефон: ${concretePerson.phoneNumber}`;
itsPhone.style.lineHeight = '0.5px';

card.appendChild(picture);
card.appendChild(itsname);
card.appendChild(itsage);
card.appendChild(itsheight);
card.appendChild(itsPhone);


document.body.appendChild(card);


