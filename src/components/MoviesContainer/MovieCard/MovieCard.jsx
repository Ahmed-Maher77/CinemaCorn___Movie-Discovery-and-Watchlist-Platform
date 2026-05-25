import MovieCardFooter from "../MovieCardFooter/MovieCardFooter";
import MovieCardInfo from "../MovieCardInfo/MovieCardInfo";
import MovieCardPoster from "../MovieCardPoster/MovieCardPoster";

const MovieCard = ({
    id,
    title,
    release_date,
    vote_average,
    poster_path,
    overview,
}) => {
    const posterUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : null;

    const releaseYear = release_date ? release_date.slice(0, 4) : "N/A";

    return (
        <article className="movieCard">
          {/* ======= poster ======= */}
            <MovieCardPoster posterUrl={posterUrl} title={title} id={id} />

            {/* ======= info & rating ======= */}
            <div className="movieCard-content">
                <MovieCardInfo
                    title={title}
                    releaseYear={releaseYear}
                    overview={overview}
                />

                {/* ======= footer ======= */}
                <MovieCardFooter rating={vote_average} id={id} />
            </div>
        </article>
    );
};

export default MovieCard;
