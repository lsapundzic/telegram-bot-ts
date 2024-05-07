export default function handleUrl(url: string) {
    let encodedUrl = encodeURIComponent(url);

    fetchSongInfo(encodedUrl);

}

const fetchSongInfo = async (newUrl:string) => {
    const res = await fetch(`https://api.song.link/v1-alpha.1/links?url=spotify%3Atrack%3A0Jcij1eWd5bDMU5iPbxe2i&userCountry=US&songIfSingle=true>`)
    const response = await res.json();
    console.log(response);
    
}