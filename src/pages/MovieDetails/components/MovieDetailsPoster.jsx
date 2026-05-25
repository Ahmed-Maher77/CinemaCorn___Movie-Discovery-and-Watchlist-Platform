import PropTypes from "prop-types";
const MovieDetailsPoster = ({ posterUrl, trailerUrl, movie }) => {
    return (
        <div className="movieDetailsPoster">
            {posterUrl ? (
                trailerUrl ? (
                    <a
                        href={trailerUrl}
                        className="posterLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Watch trailer for ${movie.title}`}
                    >
                        <img src={posterUrl} alt={movie.title} />

                        <div className="posterOverlay" aria-hidden>
                            <svg
                                viewBox="0 0 24 24"
                                className="playIcon"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8 5v14l11-7z" fill="currentColor" />
                            </svg>
                        </div>
                    </a>
                ) : (
                    <img src={posterUrl} alt={movie.title} />
                )
            ) : (
                <div className="movieDetailsPosterPlaceholder">No poster</div>
            )}
        </div>
    );
};

MovieDetailsPoster.propTypes = {
    posterUrl: PropTypes.string,
    trailerUrl: PropTypes.string,
    movie: PropTypes.object.isRequired,
};

export default MovieDetailsPoster;
