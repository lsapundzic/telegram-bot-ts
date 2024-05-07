import {Context, Telegraf} from 'telegraf'
import {message} from 'telegraf/filters'
import checkUrl from "./checkUrl";
import handleUrl from './handleUrl';


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

    let returnedFetchResponse = await checkUrl(userMessage);
    console.log(returnedFetchResponse);
    
    if (typeof returnedFetchResponse === 'string') {
        await context.reply(returnedFetchResponse);
    } else {
        console.error("Error: Fetch response is not a string.");
    }

    
})

bot.launch();