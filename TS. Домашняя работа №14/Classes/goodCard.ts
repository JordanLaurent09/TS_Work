/* import iDrawable  = require('../Interfaces/iDrawable');
import iImage = require('../Interfaces/iImage');
import good = require('./good'); */
import { IDrawable } from "../Interfaces/iDrawable";
import { IImage } from "../Interfaces/iImage";
import { Good} from "./good.js";

export default class GoodCard extends Good implements IImage, IDrawable {
    title: string;
    description: string;
    price: number;
    image: string;

    constructor(title: string, description: string, price: number, image: string) {
        super();
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    getInfo(): string {
        return `${this.title}\n${this.description}\n${this.price}`;
    }

    log(): void {
        console.log(this.getInfo());
    }

    draw(parent: HTMLElement): void {
        let goodCard: HTMLDivElement = document.createElement('div');
        goodCard.className = 'good-card';
        goodCard.style.width = '400px';
        goodCard.style.display = 'flex';
        goodCard.style.flexDirection = 'column';
        goodCard.style.justifyContent = 'space-between';
        goodCard.style.margin = '0 auto';   
        goodCard.style.marginTop = '20px';
        goodCard.style.borderRadius = '10px';
        goodCard.style.boxShadow = '10px 10px 10px dimgray';

        let cardElements: Array<HTMLElement> = new Array<HTMLElement>();

        let cardElementOne: HTMLHeadElement = document.createElement('h2');
        cardElementOne.textContent = this.title;
        let cardElementTwo: HTMLParagraphElement = document.createElement('p');
        cardElementTwo.textContent = this.description;
        let cardElementThree: HTMLParagraphElement = document.createElement('p');
        cardElementThree.textContent = this.price.toString();

        cardElements.push(cardElementOne);
        cardElements.push(cardElementTwo);
        cardElements.push(cardElementThree);

        let image: HTMLImageElement = document.createElement('img');
        image.src = this.image;

        image.style.width = '100%';
        image.style.borderTopLeftRadius = '10px';
        image.style.borderTopRightRadius = '10px';

        let info: HTMLDivElement = document.createElement('div');
        info.style.paddingLeft = "20px";
        info.style.paddingRight = "20px";

        info.style.fontFamily = 'sans-serif';

        for (let i = 0; i < cardElements.length; i++) {
            info.appendChild(cardElements[i]);
        }

        goodCard.appendChild(image);
        goodCard.appendChild(info);

        this.log();

        parent.appendChild(goodCard);
    }

}
