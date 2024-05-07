import {Context, Telegraf} from 'telegraf'
import {message} from 'telegraf/filters'
import checkUrl from "./checkUrl";
import handleUrl from './handleUrl';


// Disabled npm package because idk how it works
// import * as dotenv from 'dotenv';

// dotenv.config();

// const token = process.env.BOT_TOKEN;
// TODO: Secure the token
// TODO: generate new token
const BOT_TOKEN = "6963748664:AAHsTJkVqKa9ttyTBAF-J5T7g6p11NT0nZ8"

const bot = new Telegraf(BOT_TOKEN);

console.log("PROGRAM STARTED \n");

bot.on(message('text'), async (context) => {
    // let chatObject = context.message;
    // console.log(chatObject);
    
    
    let userName = context.message.from.username;
    let chatMessage = context.message.text;

    // TODO: More meaningful print
    console.log(`${userName}: ${chatMessage}`);

    // TODO: decouple url check from fetching
    let returnedFetchResponse = await checkUrl(chatMessage);
    console.log(returnedFetchResponse);
    
    // TODO: resolve this mess
    if (typeof returnedFetchResponse === 'string') {
        await context.reply(returnedFetchResponse);
    } else {
        console.error("Error: Fetch response is not a string.");
    }

    
})

bot.launch();