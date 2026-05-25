import PropTypes from "prop-types";
import React from "react";

const ReleaseStatus = ({ movie }) => {
    const isUpcoming = movie?.release_date
        ? new Date(movie.release_date) > new Date()
        : false;

    return (
        <div className="releaseStatus releaseStatusTop" aria-hidden>
            {isUpcoming ? (
                <>
                    <svg
                        className="releaseIcon"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                    >
                        <path
                            d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm1 13.59V7h-2v7h6v-2h-4z"
                            fill="currentColor"
                        />
                    </svg>
                    <span>Upcoming</span>
                </>
            ) : (
                <>
                    <svg
                        className="releaseIcon"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                    >
                        <path
                            d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V9h14v9z"
                            fill="currentColor"
                        />
                        <path
                            d="M9.5 13.5l1.79 1.79L15.5 11.09l-1.41-1.41-3.59 3.59z"
                            fill="currentColor"
                        />
                    </svg>
                    <span>Released</span>
                </>
            )}
        </div>
    );
};

ReleaseStatus.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default ReleaseStatus;
