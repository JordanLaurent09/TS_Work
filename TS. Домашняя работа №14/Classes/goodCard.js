import { Good } from "./good.js";
export default class GoodCard extends Good {
    constructor(title, description, price, image) {
        super();
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
    }
    getInfo() {
        return `${this.title}\n${this.description}\n${this.price}`;
    }
    log() {
        console.log(this.getInfo());
    }
    draw(parent) {
        let goodCard = document.createElement('div');
        goodCard.className = 'good-card';
        goodCard.style.width = '400px';
        goodCard.style.display = 'flex';
        goodCard.style.flexDirection = 'column';
        goodCard.style.justifyContent = 'space-between';
        goodCard.style.margin = '0 auto';
        goodCard.style.marginTop = '20px';
        goodCard.style.borderRadius = '10px';
        goodCard.style.boxShadow = '10px 10px 10px dimgray';
        let cardElements = new Array();
        let cardElementOne = document.createElement('h2');
        cardElementOne.textContent = this.title;
        let cardElementTwo = document.createElement('p');
        cardElementTwo.textContent = this.description;
        let cardElementThree = document.createElement('p');
        cardElementThree.textContent = this.price.toString();
        cardElements.push(cardElementOne);
        cardElements.push(cardElementTwo);
        cardElements.push(cardElementThree);
        let image = document.createElement('img');
        image.src = this.image;
        image.style.width = '100%';
        image.style.borderTopLeftRadius = '10px';
        image.style.borderTopRightRadius = '10px';
        let info = document.createElement('div');
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
