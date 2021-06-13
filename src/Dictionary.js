import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
        <div className="row">
            <div className="col-4">
                <h1>Dictionary</h1>
            </div>
            <div className="col-8">
                <form onSubmit={search}>
                    <input type="search" placeholder="Search..." onChange={handleKeywordChange} />
                </form>
            </div>
        </div>
        <Results  results={results} />
    </div>
    );
}