import { Link } from "react-router-dom";
import MovieCardInfo from "../../../components/MoviesContainer/MovieCardInfo/MovieCardInfo";
import MovieCardPoster from "../../../components/MoviesContainer/MovieCardPoster/MovieCardPoster";
import arrowIcon from "../../../assets/images/arrow-up-right.svg";
import starIcon from "../../../assets/images/star-svgrepo.svg";

const WatchlistMovieCard = ({ movie, onRemove, viewMode }) => {
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null;
    const releaseYear = movie.release_date
        ? movie.release_date.slice(0, 4)
        : "N/A";

    return (
        <article
            className={
                "movieCard watchlistCard" +
                (viewMode === "grid" ? " watchlistCard--grid" : "")
            }
        >
            <MovieCardPoster
                posterUrl={posterUrl}
                title={movie.title}
                id={movie.id}
            />

            <div className="movieCard-content">
                <MovieCardInfo
                    title={movie.title}
                    releaseYear={releaseYear}
                    overview={movie.overview}
                />

                <div className="watchlistCardActions">
                    <span className="watchlistCardRating">
                        <img src={starIcon} alt="Star rating" />
                        {movie.vote_average?.toFixed(1) ?? "N/A"}
                    </span>

                    <div className="watchlistActionsRow">
                        <Link
                            to={`/movies/${movie.id}`}
                            className="watchlistViewLink"
                        >
                            View Details
                            <img src={arrowIcon} alt="View details" />
                        </Link>

                        <button
                            type="button"
                            className="watchlistRemoveButton"
                            onClick={() => onRemove(movie.id)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default WatchlistMovieCard;
