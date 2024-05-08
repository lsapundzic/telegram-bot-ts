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





    // --- 1 ---

    // try {
    //     // Make the fetch request and get a Promise
    //     const responsePromise = fetch(`https://api.song.link/v1-alpha.1/links?url=${encodedUrl}&userCountry=US&songIfSingle=true`);
    
    //     const response = await responsePromise; // Wait for the response
    
    //     if (response.ok) {
    //       const receivedData = await response.json(); 
    //       console.log(receivedData);
    
    //     } else {
    //       console.error("Network response was not ok:", response.status);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }

    // --- 2 ---

    // try {
    //     let receivedData = await fetchSongInfo(encodedUrl);
    //     console.log(receivedData);
    //     console.log("SONG ID: ", receivedData.entityUniqueId);
        
    // } catch (error) {
    //     console.log("error in handleURL. Message: ", error);        
    // }
    
    


// const fetchSongInfo = async (newUrl:string) => {
//     try {
//         const res = await fetch(`https://api.song.link/v1-alpha.1/links?url=${newUrl}&userCountry=US&songIfSingle=true>`).then(response => {
//             response.json();
//             return;
//         })
//     } catch (error) {
//         console.log("Failed to fetch data");
//     }    
// }
