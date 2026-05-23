import MovieCard from "./MovieCard/MovieCard";
import MoviesNotFound from "./MoviesNotFound";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadingMessage from "../LoadingMessage/LoadingMessage";

const MoviesContainer = ({ data, isLoading, error }) => {
    return (
        <div className="moviesContainer">
            {data.length > 0 ? (
                data.map((movie) => <MovieCard {...movie} key={movie.id} />)
            ) : (
                <>
                    {isLoading && <LoadingMessage message="Loading movies..." />}
                    {error && <ErrorMessage message="An error occurred while fetching movies. Please try again later." />}
                    {!isLoading && !error && <MoviesNotFound />}
                </>
            )}
        </div>
    );
};

export default MoviesContainer;
