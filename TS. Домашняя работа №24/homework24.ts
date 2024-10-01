type ProductQuantity = number;


type Categories = "electronics" | "clothing" | "grocery";


type Inventory = Record<Categories, ProductQuantity>;


let storeInventory: Inventory = {
    'electronics': 21,
    'clothing': 20,
    'grocery': 32
}


function updateInventory(storeInventory: Inventory, category: Categories, quantity: ProductQuantity): void {
    storeInventory[category] += quantity;
}

function getInventorySummary(storeInventory: Inventory): string {
    return `Electronics: ${storeInventory.electronics}, Clothing: ${storeInventory.clothing}, Grocery: ${storeInventory.grocery}`;
}

console.log(getInventorySummary(storeInventory));

updateInventory(storeInventory, 'clothing', 4);

console.log(getInventorySummary(storeInventory));