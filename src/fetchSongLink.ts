interface SongLinkData {
    linksByPlatform: {
        [platform: string]: PlatformLink;
    };
}

interface PlatformLink {
    country: string;
    url: string;
    entityUniqueId: string;
}

export default async function fetchSongLink (url: string) { 
    
    // Recommended by the API documentation
    let encodedUrl = encodeURIComponent(url);    

    try {
        const responsePromise = fetch(`https://api.song.link/v1-alpha.1/links?url=${encodedUrl}&userCountry=US&songIfSingle=true`);
        const response = await responsePromise;
    
        if (response.ok) {
            const receivedData = await response.json() as SongLinkData;
         
            // console.log("Fetched url: ", receivedData.linksByPlatform.spotify.url);
            
            return receivedData.linksByPlatform.spotify.url;
            
        } else {
            console.error("Network response status", response.status, " : ", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
