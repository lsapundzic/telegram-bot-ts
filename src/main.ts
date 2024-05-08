import {Context, Telegraf} from 'telegraf'
import {message} from 'telegraf/filters'
import identifyUrlType from "./identifyUrlType";
import fetchSongLink from './fetchSongLink';
import * as dotenv from 'dotenv';

dotenv.config();

const secret = process.env.BOT_TOKEN;

if (!secret) {
    throw new Error('Missing environment variable BOT_TOKEN');
}

const bot = new Telegraf(secret);

console.log("BOT STARTED \n");

bot.on(message('text'), async (context) => {

    let userName = context.message.from.username;
    let message = context.message.text;

    console.log(`${userName}: ${message}`);

    let platformUrl = identifyUrlType(message);

    if (platformUrl) {
        let response = await fetchSongLink(platformUrl.url);

        if (typeof response === 'string') {
            console.log("Bot response: ", response);
            await context.reply(response)
        }
    }

    console.log("\n");
})

bot.launch();