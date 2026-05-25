import React from "react";
import PropTypes from "prop-types";
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

HomeResults.propTypes = {
    moviesData: PropTypes.array,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.any,
    viewMode: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    totalResultsNum: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
};

export default HomeResults;
