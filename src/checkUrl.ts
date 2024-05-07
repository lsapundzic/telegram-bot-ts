import handleUrl from "./handleUrl";

export default function checkUrl(text: string) {
    const tidalRegex = /^https?:\/\/(www\.)?tidal\.com\/(browse|track|playlist|artist|album|user|genre|video|podcast|mix|radio|livestream|editorial|chart|search|flow|family|settings|login|signup|autocomplete|autocomplete\/v2|autocomplete\/v3|autocomplete\/v4|autocomplete\/v5|autocomplete\/v6|autocomplete\/v7|autocomplete\/v8|autocomplete\/v9|autocomplete\/v10|autocomplete\/v11|autocomplete\/v12|autocomplete\/v13|autocomplete\/v14|autocomplete\/v15|autocomplete\/v16|autocomplete\/v17|autocomplete\/v18|autocomplete\/v19|autocomplete\/v20|autocomplete\/v21|autocomplete\/v22|autocomplete\/v23|autocomplete\/v24|autocomplete\/v25|autocomplete\/v26|autocomplete\/v27|autocomplete\/v28|autocomplete\/v29|autocomplete\/v30|autocomplete\/v31|autocomplete\/v32|autocomplete\/v33|autocomplete\/v34|autocomplete\/v35|autocomplete\/v36|autocomplete\/v37|autocomplete\/v38|autocomplete\/v39|autocomplete\/v40|autocomplete\/v41|autocomplete\/v42|autocomplete\/v43|autocomplete\/v44|autocomplete\/v45|autocomplete\/v46|autocomplete\/v47|autocomplete\/v48|autocomplete\/v49|autocomplete\/v50|autocomplete\/v51|autocomplete\/v52|autocomplete\/v53|autocomplete\/v54|autocomplete\/v55|autocomplete\/v56|autocomplete\/v57|autocomplete\/v58|autocomplete\/v59|autocomplete\/v60|autocomplete\/v61|autocomplete\/v62|autocomplete\/v63|autocomplete\/v64|autocomplete\/v65|autocomplete\/v66|autocomplete\/v67|autocomplete\/v68|autocomplete\/v69|autocomplete\/v70|autocomplete\/v71|autocomplete\/v72|autocomplete\/v73|autocomplete\/v74|autocomplete\/v75|autocomplete\/v76|autocomplete\/v77|autocomplete\/v78|autocomplete\/v79|autocomplete\/v80|autocomplete\/v81|autocomplete\/v82|autocomplete\/v83|autocomplete\/v84|autocomplete\/v85|autocomplete\/v86|autocomplete\/v87|autocomplete\/v88|autocomplete\/v89|autocomplete\/v90|autocomplete\/v91|autocomplete\/v92|autocomplete\/v93|autocomplete\/v94|autocomplete\/v95|autocomplete\/v96|autocomplete\/v97|autocomplete\/v98|autocomplete\/v99|autocomplete\/v100|\/|\?|\#)/i;
  
    const match = tidalRegex.exec(text);

    if (match) {
        const url = match[0];
        console.log("Tidal URL found");
        
    } else {
        console.log("No Tidal URL");
    }
}