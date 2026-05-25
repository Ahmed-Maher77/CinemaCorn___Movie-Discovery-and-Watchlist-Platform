import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ViewToggle from "../../components/ViewToggle/ViewToggle";
import "./HomeSearch.css";

const HomeSearch = ({
    searchQuery,
    handleChange,
    viewMode,
    handleViewChange,
    totalResultsNum,
}) => {
    return (
        <div className="search-container">
            <SearchBar searchQuery={searchQuery} handleChange={handleChange} />

            <div className="search-actions">
                <ViewToggle
                    viewMode={viewMode}
                    onViewChange={handleViewChange}
                />

                <span className="results-count">
                    Found <b>{totalResultsNum}</b> results
                </span>
            </div>
        </div>
    );
};

export default HomeSearch;
