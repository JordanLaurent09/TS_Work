"use strict";
function getProperty(obj, propertyName) {
    if ('author' in obj) {
        console.log(obj[propertyName]);
    }
}
let potter = {
    title: "Potter",
    author: "J.K. Rowling",
    yearPublished: 2007,
    available: true
};
getProperty(potter, 'title');
