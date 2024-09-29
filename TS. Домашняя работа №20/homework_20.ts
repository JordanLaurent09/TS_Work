enum MessageTypes {
    text = 'text',
    image = 'image',
    video = 'video'
}

type TextMessage = {
    type: MessageTypes.text;
    content: string;
}

type ImageMessage = {
    type: MessageTypes.image;
    url: string;
    altText: string;
}

type VideoMessage = {
    type: MessageTypes.video;
    url: string;
    duration: number;
}

type Message = TextMessage | ImageMessage | VideoMessage;

function processMessage(message: Message) {
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

let textMessage: TextMessage = { type: MessageTypes.text, content: "Привет друг!" };
let imageMessage: ImageMessage = { type: MessageTypes.image, url:
"http://example.com/image.jpg", altText: "Образец картинки" };
let videoMessage: VideoMessage = { type: MessageTypes.video, url:
"http://example.com/video.mp4", duration: 120 };
processMessage(textMessage);
processMessage(imageMessage);
processMessage(videoMessage);