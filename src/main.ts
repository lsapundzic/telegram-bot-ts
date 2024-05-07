import {Context, Telegraf} from 'telegraf'
import {message} from 'telegraf/filters'


// Disabled npm package because idk how it works
// import * as dotenv from 'dotenv';

// dotenv.config();

// const token = process.env.BOT_TOKEN;
// TODO: Secure the token
const BOT_TOKEN = "6963748664:AAHsTJkVqKa9ttyTBAF-J5T7g6p11NT0nZ8"

const bot = new Telegraf(BOT_TOKEN);

console.log("PROGRAM STARTED \n");

bot.on(message('text'), async (context) => {
    let messageData = context.message;
    let userName = context.message.from.username;
    let userMessage = context.message.text;
    
    console.log(userName, " said ", userMessage);

    checkTidalUrl(userMessage);
    
    await context.reply(`${userName} said ${userMessage}`);
})

bot.launch();