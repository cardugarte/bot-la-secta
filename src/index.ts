import TelegramBot from 'node-telegram-bot-api';

console.log('Congratulations, you are ready to start coding! 🎉');

const token = '';

// Crear una instancia del bot utilizando 'polling' para obtener actualizaciones
const bot = new TelegramBot(token, { polling: true });

// Tipo de mensaje (opcional para TypeScript)
interface TelegramMessage {
    chat: { id: number };
    text?: string;
}

// Responder al comando '/start'
bot.onText(/\/start/, (msg: TelegramMessage) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '¡Hola! Soy tu bot.');
});

// Responder a cualquier mensaje que contenga "hola"
bot.on('message', (msg: TelegramMessage) => {
    const chatId = msg.chat.id;
    const text = msg.text?.toLowerCase();

    if (text === 'hola') {
        bot.sendMessage(chatId, '¡Hola! ¿Cómo estás?');
    }
});
