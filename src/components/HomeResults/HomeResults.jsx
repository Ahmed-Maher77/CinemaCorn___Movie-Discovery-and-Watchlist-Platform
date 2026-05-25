import React from "react";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import Pagination from "../../components/Pagination/Pagination";
import "./HomeResults.css";

const HomeResults = ({
    moviesData,
    isLoading,
    error,
    viewMode,
    currentPage,
    totalPages,
    totalResultsNum,
    handlePageChange,
}) => {
    return (
        <>
            <MoviesContainer
                data={moviesData}
                error={error}
                isLoading={isLoading}
                viewMode={viewMode}
            />

            {totalResultsNum > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    isLoading={isLoading}
                    onPageChange={handlePageChange}
                />
            )}
        </>
    );
};

export default HomeResults;
