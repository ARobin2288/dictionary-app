import React, { useState } from "react";
import axios from "axios";
import Photos from "./Photos";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    function handleDictionResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionResponse);

        const pexelsApiKey = "563492ad6f91700001000001d69fb31d76c7485895d18086b0ea70b6";
        const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        const headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
    <div className="Dictionary">
        <section>
            <div className="row">
                <div className="col-5">
                    <h1>Dictionary</h1>
                </div>
                <div className="col-7">
                    <div className="Searchbar">
                        <form onSubmit={handleSubmit}>
                            <input type="search" placeholder="Search..." onChange={handleKeywordChange} />
                        </form>
                        <p>
                            Suggested Words: Nightfall, Halloween, Octopus, Smorgasbord
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Photos photos={photos} />
        <Results  results={results} />
    </div>
    );
} else {
    load();
    return "Loading...";
}
}