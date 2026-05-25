import PropTypes from "prop-types";
import dateRangeIcon from "../../../assets/images/date.svg";
import "./MovieCardInfo.css";

const MovieCardInfo = ({ title, releaseYear, overview }) => {
    return (
        <div className="movieCard-info">
            {/* ======= header ======= */}
            <div className="movieCard-header">
                <h3>{title}</h3>
                <span>
                    <img src={dateRangeIcon} alt={`${title} release date`} />
                    {releaseYear}
                </span>
            </div>

            {/* ======= overview ======= */}
            <p className="movieCard-overview">
                {overview || "No description is available for this movie."}
            </p>
        </div>
    );
};

MovieCardInfo.propTypes = {
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.string.isRequired,
    overview: PropTypes.string,
};

export default MovieCardInfo;
