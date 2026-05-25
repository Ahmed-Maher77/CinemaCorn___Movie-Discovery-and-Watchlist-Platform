import { useEffect, useState } from "react";
import starIcon from "../../../assets/images/star.svg";
import outlinedStarIcon from "../../../assets/images/outlined-star.svg";
import PropTypes from 'prop-types';

const ratingLabels = ["Terrible", "Bad", "Okay", "Good", "Amazing"];

const StarsRating = ({ movieId }) => {
    const [hoveredStar, setHoveredStar] = useState(null);
    const [activeStar, setActiveStar] = useState(null);
    const isStarFilled = (idx) => {
        return (activeStar !== null && activeStar >= idx) || (hoveredStar !== null && hoveredStar >= idx);
    }

    // Load existing rating from localStorage
    useEffect(() => {
        const storedRatings =
            JSON.parse(localStorage.getItem("moviesRating")) || [];
        const existingRating = storedRatings.find(
            (rating) => rating.id === movieId,
        );
        if (existingRating) {
            setActiveStar(existingRating.rating === null ? null : existingRating.rating - 1);
        }
    }, [movieId]);

    // Handle star click to set rating
    const handleClick = (idx) => {
        const storedRatings =
            JSON.parse(localStorage.getItem("moviesRating")) || [];
        const ratingIndex = storedRatings.findIndex(
            (rating) => rating.id === movieId,
        );
        if (ratingIndex !== -1) {
            storedRatings[ratingIndex].rating = idx + 1;
        } else {
            storedRatings.push({ id: movieId, rating: idx + 1 });
        }
        localStorage.setItem("moviesRating", JSON.stringify(storedRatings));
        setActiveStar(idx);
    };
    
    
    // Handle reset rating
    const resetRating = () => {
        const storedRatings =
            JSON.parse(localStorage.getItem("moviesRating")) || [];
        const ratingIndex = storedRatings.findIndex(
            (rating) => rating.id === movieId,
        );
        if (ratingIndex !== -1) {
            storedRatings[ratingIndex].rating = null;
        } else {
            storedRatings.push({ id: movieId, rating: null });
        }
        localStorage.setItem("moviesRating", JSON.stringify(storedRatings));
        setActiveStar(null);
    };

    return (
        <div className="starsRating">
            {Array.from({ length: 5 }).map((_, idx) => (
                <img
                    className={`${hoveredStar !== null && hoveredStar >= idx ? "hovered" : ""}  ${activeStar !== null && activeStar >= idx ? "active" : ""}`}
                    key={idx}
                    src={isStarFilled(idx) ? starIcon : outlinedStarIcon}
                    alt="Star"
                    onMouseEnter={() => setHoveredStar(idx)}
                    onMouseLeave={() => setHoveredStar(null)}
                    onClick={() => handleClick(idx)}
                />
            ))}
            
            {/* ========= rating value ========= */}
            <span className="ratingValue">
                {/* {activeStar !== null && `${activeStar + 1}/5`} */}
                {activeStar !== null && ratingLabels[activeStar]}
            </span>

            {/* ========= reset rating button ========= */}
            {activeStar !== null && (
                <button onClick={resetRating} className="reset-rating">
                    Reset Rating
                </button>
            )}
        </div>
    );
};


StarsRating.propTypes = {
    movieId: PropTypes.number.isRequired
}

export default StarsRating;
