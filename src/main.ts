import {Context, Telegraf} from 'telegraf'
import {message} from 'telegraf/filters'

const BOT_TOKEN: string = "6963748664:AAFBtwGm3Z8j3LN4FENWewp5jCpOf-yyZMU"

const bot = new Telegraf(BOT_TOKEN);

console.log("---Program started---");

bot.on(message('text'), async (context) => {
    let messageMonitor = context.message;

    await context.reply(`message received`)
})

bot.launch();
