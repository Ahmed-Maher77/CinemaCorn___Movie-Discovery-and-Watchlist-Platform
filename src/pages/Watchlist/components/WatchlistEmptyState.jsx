import { Link } from "react-router-dom";
import arrowIcon from "../../../assets/images/arrow-up-right.svg";
import notFoundIcon from "../../../assets/images/notFound-icon.svg";

const WatchlistEmptyState = () => {
    return (
        <div className="watchlistEmpty">
            <img
                src={notFoundIcon}
                alt="No movies"
                className="watchlistEmptyIcon"
                aria-hidden
            />
            <h2>No movies saved yet</h2>
            <p>
                Add titles to your watchlist from the movie details page to keep
                track of what you want to watch.
            </p>
            <Link to="/" className="watchlistEmptyLink">
                Explore movies
                <img src={arrowIcon} alt="Explore movies" />
            </Link>
        </div>
    );
};

export default WatchlistEmptyState;
