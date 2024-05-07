const handleUrl = async (url: string) => {
    let encodedUrl = encodeURIComponent(url);

    let receivedData = await fetchSongInfo(encodedUrl);

    console.log(receivedData);
    
    
}

const fetchSongInfo = async (newUrl:string) => {
    try {
        const res = await fetch(`https://api.song.link/v1-alpha.1/links?url=${newUrl}&userCountry=US&songIfSingle=true>`)
        const response = await res.json();
        return response;
    } catch (error) {
        console.log("Failed to fetch data");
    }    
}

export default handleUrl;