import PropTypes from "prop-types";
import MovieCard from "./MovieCard/MovieCard";
import MoviesNotFound from "./MoviesNotFound";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadingMessage from "../LoadingMessage/LoadingMessage";
import "./MoviesContainer.css";

const MoviesContainer = ({
    data = [],
    isLoading,
    error,
    viewMode = "horizontal",
}) => {
    const containerClass = `moviesContainer ${viewMode === "grid" ? "grid-view" : "list-view"}`;
    return (
        <div className={containerClass}>
            {/* ======= movies list ======= */}
            {data.length > 0 ? (
                data.map((movie) => <MovieCard {...movie} key={movie.id} />)
            ) : (
                // ======= empty state =======
                <div className="moviesContainer-empty">
                    {isLoading && (
                        <LoadingMessage message="Loading movies..." />
                    )}
                    {error && (
                        <ErrorMessage message="An error occurred while fetching movies. Please try again later." />
                    )}
                    {!isLoading && !error && <MoviesNotFound />}
                </div>
            )}
        </div>
    );
};

MoviesContainer.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.any,
    viewMode: PropTypes.string,
};

export default MoviesContainer;
