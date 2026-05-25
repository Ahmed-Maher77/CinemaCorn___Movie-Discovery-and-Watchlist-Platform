import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieDetailsTopbar = ({ movieTitle, onBack }) => {
    return (
        <div className="movieDetailsTopbar">
            {/* ======= back button ======= */}
            <button
                type="button"
                onClick={onBack}
                className="backButton"
                aria-label="Go back"
            >
                <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                >
                    <path
                        d="M14.5 5.5a1 1 0 0 1 0 1.414L10.414 11H20a1 1 0 1 1 0 2h-9.586l4.086 4.086a1 1 0 0 1-1.414 1.414l-5.793-5.793a1 1 0 0 1 0-1.414l5.793-5.793a1 1 0 0 1 1.414 0Z"
                        fill="currentColor"
                    />
                </svg>
                Back
            </button>

            {/* ======= breadcrumb ======= */}
            <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>{movieTitle || "Movie details"}</span>
            </nav>
        </div>
    );
};

MovieDetailsTopbar.propTypes = {
    movieTitle: PropTypes.string,
    onBack: PropTypes.func.isRequired,
};

export default MovieDetailsTopbar;
