/* import cardContainer  = require("./Classes/cardsContainer");
import goodCard = require("./Classes/goodCard"); */
import CardContainer from "./Classes/cardsContainer.js";
import GoodCard from "./Classes/goodCard.js";
let goodsArray = new Array();
document.body.style.width = '80%';
document.body.style.margin = '0 auto';
document.body.style.display = 'flex';
document.body.style.flexWrap = 'wrap';
document.body.style.justifyContent = 'space-evenly';
goodsArray.push(new GoodCard("Компьютер", "Мощный компьютер для игр. Процессор: intel core i5 10400f. ОЗУ: Kingston 32gb Видеокарта: geforce rtx 4090", 79899.99, 'Images/powerful_computer.png'));
goodsArray.push(new GoodCard("Ноутбук", "Легкий и мощный ноутбук для работы и развлечений. Процессор: AMD Ryzen 7 5800H. ОЗУ: 16gb DDR4 SSD: 1TB NVMe", 65999.99, 'Images/laptop.png'));
goodsArray.push(new GoodCard("Смартфон", "Флагманский смартфон с лучшей камерой. Процессор: Snapdragon 888. ОЗУ: 12gb Аккумулятор: 5000mAh", 54999.99, 'Images/smartphone.png'));
goodsArray.push(new GoodCard("Игровая консоль", "Последняя версия игровой консоли. Поддержка 4К игр. Встроенный SSD 1TB", 39999.99, 'Images/game_console.png'));
goodsArray.push(new GoodCard("Смарт-часы", "Умные часы с функцией отслеживания фитнеса и уведомлений. Процессор: Exynos 9110. Время работы: до 7 дней", 12999.99, 'Images/smart_watch.png'));
goodsArray.push(new GoodCard("Наушники", "Беспроводные наушники с активным шумоподавлением. Время работы: до 30 часов. Поддержка быстрой зарядки", 8999.99, 'Images/headphones.png'));
let container = new CardContainer(document.body, goodsArray);
container.append();
