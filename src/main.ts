import {Context, Telegraf} from 'telegraf'
import {message} from 'telegraf/filters'

import * as dotenv from 'dotenv';

dotenv.config();

const token = process.env.BOT_TOKEN;

const bot = new Telegraf(token);

console.log("PROGRAM STARTED \n");

bot.on(message('text'), async (context) => {
    let messageMonitor = context.message;
    await context.reply(`message received`);
})

bot.launch();