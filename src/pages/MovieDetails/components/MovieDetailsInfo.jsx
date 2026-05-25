import PropTypes from "prop-types";
import StarsRating from "./StarsRating";

const MovieDetailsInfo = ({ movie, trailerUrl }) => {
    return (
        <div className="movieDetailsInfo">
            {/* ======== tagline ======== */}
            {movie.tagline && <p className="movieTagline">{movie.tagline}</p>}

            {/* ======== trailer ======== */}
            {trailerUrl && (
                <p>
                    <a
                        className="watchTrailerLink"
                        href={trailerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ▶ Watch trailer
                    </a>
                </p>
            )}

            {/* ======== overview ======== */}
            <h2>Overview</h2>
            <p className="movieDetailsOverview">
                {movie.overview || "No overview is available for this movie."}
            </p>

            {/* ======= Rating Stars ======== */}
            <StarsRating movieId={movie.id} />

            {/* ======== genres ======== */}
            {movie.genres?.length > 0 && (
                <div className="genreList">
                    {movie.genres.map((genre) => (
                        <span key={genre.id}>{genre.name}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

MovieDetailsInfo.propTypes = {
    movie: PropTypes.object.isRequired,
    trailerUrl: PropTypes.string,
};

export default MovieDetailsInfo;
