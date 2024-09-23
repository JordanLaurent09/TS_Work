//import goodCard = require("./goodCard");
export default class CardContainer {
    constructor(htmlElement, goodCards) {
        this.htmlElement = htmlElement;
        this.goodCards = goodCards;
    }
    append() {
        for (let i = 0; i < this.goodCards.length; i++) {
            this.goodCards[i].draw(this.htmlElement);
        }
    }
}
