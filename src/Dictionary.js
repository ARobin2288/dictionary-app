import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
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
    </div>
    );
}