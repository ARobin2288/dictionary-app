import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);  
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
        <Results  results={results} />
    </div>
    );
} else {
    load();
    return "Loading...";
}
}