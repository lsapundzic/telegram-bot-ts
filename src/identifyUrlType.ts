interface Url {
    url: string;
}

export default function identifyUrlType(chatMessage: string): Url | undefined {
    console.log(`String received by identifyUrlType: ${chatMessage}`);


    // TODO: questionable regex. Maybe works but not for all cases.
    const tidalRegex = /(https?:\/\/(www\.)?tidal\.com\/(?:[^"\s]+))/gi;
    const match = tidalRegex.exec(chatMessage);

    console.log("String sent back by the identifyUrlType: ", match?.[0]);
    
    // Abbreviated if-else 
    return match?.[0] ? { url: match[0] } : undefined;
    
}