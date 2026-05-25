import "./MovieCardPoster.css";
import { Link } from "react-router-dom";

const MovieCardPoster = ({ posterUrl, title, id }) => {
    return (
        <figure className="movieCard-poster">
            {/* ======= poster ======= */}
            {posterUrl ? (
                <img src={posterUrl} alt={title} />
            ) : (
                <div className="movieCard-placeholder">No poster</div>
            )}

            {/* ======= overlay ======= */}
            <Link
                to={`/movies/${id}`}
                className="movieCard-poster-overlay"
                aria-label={`Open ${title} details`}
            >
                <span className="movieCard-poster-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 7a1 1 0 0 0 0 2h4.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 10.414V15a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1H9z"
                            fill="currentColor"
                        />
                    </svg>
                </span>
            </Link>
        </figure>
    );
};

export default MovieCardPoster;
