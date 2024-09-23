import GoodCard from "./goodCard";
//import goodCard = require("./goodCard");
export default class CardContainer {

    htmlElement: HTMLElement;
    goodCards: Array<GoodCard>;

    constructor(htmlElement: HTMLElement, goodCards: Array<GoodCard>) {
        this.htmlElement = htmlElement;
        this.goodCards = goodCards;
    }

    append(): void {
        for (let i = 0; i < this.goodCards.length; i++) {
            this.goodCards[i].draw(this.htmlElement);
            
        }
    }
}