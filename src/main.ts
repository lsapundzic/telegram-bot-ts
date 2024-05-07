import {Context, Telegraf} from 'telegraf'
import {message} from 'telegraf/filters'


// Disabled npm package because idk how it works
// import * as dotenv from 'dotenv';

// dotenv.config();

// const token = process.env.BOT_TOKEN;

const BOT_TOKEN = "6963748664:AAHsTJkVqKa9ttyTBAF-J5T7g6p11NT0nZ8"

const bot = new Telegraf(BOT_TOKEN);

console.log("PROGRAM STARTED \n");

bot.on(message('text'), async (context) => {
    let messageMonitor = context.message;
    await context.reply(`message received`);
})

bot.launch();