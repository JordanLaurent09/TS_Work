"use strict";
var MessageTypes;
(function (MessageTypes) {
    MessageTypes["text"] = "text";
    MessageTypes["image"] = "image";
    MessageTypes["video"] = "video";
})(MessageTypes || (MessageTypes = {}));
function processMessage(message) {
    if ('altText' in message) {
        console.log(`Тип сообщения: ${message.type}, url сообщения: ${message.url}, а дополнительная информация гласит: ${message.altText}`);
    }
    else if ('content' in message) {
        console.log(`Тип сообщения - ${message.type}, а его содержание - ${message.content}`);
    }
    else if ('duration' in message) {
        console.log(`Тип сообщения: ${message.type}, url сообщения: ${message.url}, а его длительность: ${message.duration}`);
    }
    else {
        console.log("Something strange");
    }
}
let textMessage = { type: MessageTypes.text, content: "Привет друг!" };
let imageMessage = { type: MessageTypes.image, url: "http://example.com/image.jpg", altText: "Образец картинки" };
let videoMessage = { type: MessageTypes.video, url: "http://example.com/video.mp4", duration: 120 };
processMessage(textMessage);
processMessage(imageMessage);
processMessage(videoMessage);
