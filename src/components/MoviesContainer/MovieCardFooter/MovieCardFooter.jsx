import "./MovieCardFooter.css";
import starIcon from "../../../assets/images/star-svgrepo.svg";
import arrowIcon from "../../../assets/images/arrow-up-right.svg";
import { Link } from "react-router-dom";


const MovieCardFooter = ({ rating, id }) => {
    return (
        <div className="movieCard-footer">
            {/* ======= rating ======= */}
            <span className="movieCard-rating">
                <img src={starIcon} alt="Star rating" />
                {rating?.toFixed(1) ?? "N/A"}
            </span>
            
            {/* ======= view details link ======= */}
            <Link to={`/movies/${id}`}>
                View Details
                <img src={arrowIcon} alt="View details" />
            </Link>
        </div>
    );
};

export default MovieCardFooter;
