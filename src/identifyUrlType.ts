interface Url {
    url: string;
}

export default function identifyUrlType(chatMessage: string): Url | undefined {

    // TODO: questionable regex. Maybe works but not for all cases.
    const tidalRegex = /(?<!https?:\/\/)(https?:\/\/(www\.)?tidal\.com\/(browse|track|playlist|artist|album|user|genre|video|podcast|mix|radio|livestream|editorial|chart|search|flow|family|settings|login|signup|autocomplete|autocomplete\/v2|autocomplete\/v3|...|autocomplete\/v100|\/|\?|\#))/gi;
    const match = tidalRegex.exec(chatMessage);

    // Abbreviated if-else 
    return match?.[0] ? { url: match[0] } : undefined;
    
}