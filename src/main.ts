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

// TODO: generate new token

const bot = new Telegraf(secret);

console.log("BOT STARTED \n");

bot.on(message('text'), async (context) => {
    
    let userName = context.message.from.username;
    let chatMessage = context.message.text;

    // TODO: More meaningful print
    console.log(`${userName}: ${chatMessage}`);

    let platformUrl = identifyUrlType(chatMessage);
    console.log("String received back to main:", platformUrl?.url);
    

    if(platformUrl){
        let response = await fetchSongLink(platformUrl.url)
        console.log("logic response: ", response);
        

        if (typeof response === 'string') {
            console.log("RESPONSE: ", response);
            context.reply(response)
        }
        
    } 

    console.log("\n");    
})

bot.launch();