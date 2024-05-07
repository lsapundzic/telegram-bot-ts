// TODO: the interface solution is not that greaet
interface Structure {
    musicLink: boolean;
    platform: "tidal" | "spotify" | "other";
    url: string;
}

export default function identifyUrlType(chatMessage: string): Structure {


    // TODO: questionable regex. Maybe works but not for all cases.
    const tidalRegex = /(?<!https?:\/\/)(https?:\/\/(www\.)?tidal\.com\/(browse|track|playlist|artist|album|user|genre|video|podcast|mix|radio|livestream|editorial|chart|search|flow|family|settings|login|signup|autocomplete|autocomplete\/v2|autocomplete\/v3|...|autocomplete\/v100|\/|\?|\#))/gi;
    const match = tidalRegex.exec(chatMessage);

    if (match) {
        const url = match[0];
        console.log("Tidal URL");
        return {
            musicLink: true,
            platform: "tidal",
            url: url
        }
        
    } else {
        console.log("Not Tidal URL");
        return {
            musicLink: false,
            platform: "other",
            url: ""
        }
    }
}