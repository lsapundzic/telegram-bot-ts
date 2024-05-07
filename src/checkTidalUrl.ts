function checkTidalUrl(text: string): void {
    const tidalRegex = /https?:\/\/(?:www\.)?tidal\.com\/(?!login|signup|browse|radio|about|contact|help|blog|jobs|terms|privacy|cookies|press|investors|developers|gift-cards|family|student|military|fi)(.+)/gi;
  
    const match = tidalRegex.exec(text);
  
    if (match) {
        console.log("CONFIRMED");
      const url = match[0]; // Capture the entire matched URL
    //   handleTidalUrl(url);
    } else {
        console.log("The string is not a Tidal URL");
    }
  }