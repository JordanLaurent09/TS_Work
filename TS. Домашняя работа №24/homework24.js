"use strict";
let storeInventory = {
    'electronics': 21,
    'clothing': 20,
    'grocery': 32
};
function updateInventory(storeInventory, category, quantity) {
    storeInventory[category] += quantity;
}
function getInventorySummary(storeInventory) {
    return `Electronics: ${storeInventory.electronics}, Clothing: ${storeInventory.clothing}, Grocery: ${storeInventory.grocery}`;
}
console.log(getInventorySummary(storeInventory));
updateInventory(storeInventory, 'clothing', 4);
console.log(getInventorySummary(storeInventory));
