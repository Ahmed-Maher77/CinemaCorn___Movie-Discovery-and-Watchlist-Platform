import PropTypes from "prop-types";
import React from "react";

const MovieMeta = ({ movie }) => {
    return (
        <div className="movieHeroMeta">
            <span className="movieMetaItem">
                <svg
                    className="movieMetaIcon"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                >
                    <path
                        d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm13 8H4v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9ZM5 6a1 1 0 0 0-1 1v1h16V7a1 1 0 0 0-1-1h-1v1a1 1 0 1 1-2 0V6H8v1a1 1 0 1 1-2 0V6H5Z"
                        fill="currentColor"
                    />
                </svg>
                <span>{movie.release_date || "N/A"}</span>
            </span>

            <span className="movieMetaItem">
                <svg
                    className="movieMetaIcon"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                >
                    <path
                        d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 3a1 1 0 0 1 1 1v3.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V8a1 1 0 0 1 1-1Z"
                        fill="currentColor"
                    />
                </svg>
                <span>
                    {movie.runtime ? `${movie.runtime} min` : "Runtime N/A"}
                </span>
            </span>

            <span className="movieMetaItem">
                <svg
                    className="movieMetaIcon"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                >
                    <path
                        d="M12 3.2 14.47 8.2l5.52.8-4 3.9.95 5.5L12 15.8 7.06 18.4l.94-5.5-4-3.9 5.52-.8L12 3.2Z"
                        fill="currentColor"
                    />
                </svg>
                <span>
                    {typeof movie.vote_average === "number"
                        ? `${movie.vote_average.toFixed(1)} / 10`
                        : "N/A"}
                </span>
            </span>

            <span className="movieMetaItem">
                <svg
                    className="movieMetaIcon"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                >
                    <path
                        d="M7.5 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM2 18.5a4.5 4.5 0 0 1 9 0 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm10.5 1a1 1 0 0 1-1-1 4 4 0 0 1 7.2-2.4A4 4 0 0 1 22 18.5a1 1 0 0 1-1 1h-8.5Z"
                        fill="currentColor"
                    />
                </svg>
                <span>{movie.vote_count || 0} votes</span>
            </span>
        </div>
    );
};

MovieMeta.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default MovieMeta;
