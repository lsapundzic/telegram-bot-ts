interface Url {
    url: string;
}

export default function identifyUrlType(chatMessage: string): Url | undefined {
    
    const tidalRegex = /(https?:\/\/(www\.)?tidal\.com\/(?:[^"\s]+))/gi;
    const match = tidalRegex.exec(chatMessage);
    
    // Abbreviated the if-else 
    return match?.[0] ? { url: match[0] } : undefined;
}