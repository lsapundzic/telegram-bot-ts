const handleUrl = async (url: string) => {
    let encodedUrl = encodeURIComponent(url);

    try {
        // Make the fetch request and get a Promise
        const responsePromise = fetch(`https://api.song.link/v1-alpha.1/links?url=${encodedUrl}&userCountry=US&songIfSingle=true`);
    
        // Handle the Promise using .then and .catch
        const response = await responsePromise; // Wait for the response
    
        if (response.ok) {
          const receivedData = await response.json(); // Parse JSON response (wait for parsing)
          console.log(receivedData);
    
        } else {
          console.error("Network response was not ok:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }

    // try {
    //     let receivedData = await fetchSongInfo(encodedUrl);
    //     console.log(receivedData);
    //     console.log("SONG ID: ", receivedData.entityUniqueId);
        
    // } catch (error) {
    //     console.log("error in handleURL. Message: ", error);        
    // }
    
    
}

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

export default handleUrl;