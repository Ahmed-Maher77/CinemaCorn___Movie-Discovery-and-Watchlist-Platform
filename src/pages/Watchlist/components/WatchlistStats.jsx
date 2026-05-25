import PropTypes from "prop-types";
import movieIcon from "../../../assets/images/movie.svg";

const STAT_ICONS = {
    rating: (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M12 4.5L14.94 9.98L21 10.72L16.6 14.82L17.76 20.75L12 17.92L6.24 20.75L7.4 14.82L3 10.72L9.06 9.98L12 4.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
        </svg>
    ),
    popularity: (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M5 18.5H19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
            <path
                d="M6.5 14.5L10 10.9L13 13.5L18 8.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.5 8.5H18V12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    runtime: (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <circle
                cx="12"
                cy="12"
                r="7.5"
                stroke="currentColor"
                strokeWidth="1.8"
            />
            <path
                d="M12 8.5V12.5L14.5 14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
};

const formatValue = (value, digits = 0) => {
    if (!Number.isFinite(value)) {
        return "0";
    }

    return value.toFixed(digits);
};

const WatchlistStats = ({ movies }) => {
    const movieCount = movies.length;
    const ratingAverage = movieCount
        ? movies.reduce((sum, movie) => sum + (movie.vote_average ?? 0), 0) /
          movieCount
        : 0;
    const popularityAverage = movieCount
        ? movies.reduce((sum, movie) => sum + (movie.popularity ?? 0), 0) /
          movieCount
        : 0;
    const totalRuntime = movies.reduce(
        (sum, movie) => sum + (movie.runtime ?? 0),
        0,
    );

    const stats = [
        {
            key: "movies",
            label: "Movies",
            value: movieCount,
            digits: 0,
        },
        {
            key: "rating",
            label: "Avg rating",
            value: ratingAverage,
            digits: 1,
        },
        {
            key: "popularity",
            label: "Avg popularity",
            value: popularityAverage,
            digits: 1,
        },
        {
            key: "runtime",
            label: "Minutes watching",
            value: totalRuntime,
            digits: 0,
        },
    ];

    return (
        <section className="watchlistStats" aria-label="Watchlist statistics">
            {stats.map((stat) => (
                <article
                    className={`watchlistStat watchlistStat--${stat.key}`}
                    key={stat.key}
                >
                    {/* ========= Icon ======== */}
                    <span className="watchlistStatIcon" aria-hidden="true">
                        {stat.key === "movies" ? (
                            <img src={movieIcon} alt="" aria-hidden="true" />
                        ) : (
                            STAT_ICONS[stat.key]
                        )}
                    </span>

                    {/* ========= Content ======== */}
                    <div className="watchlistStatContent">
                        <strong className="watchlistStatValue">
                            {formatValue(stat.value, stat.digits)}
                        </strong>
                        <span className="watchlistStatLabel">{stat.label}</span>
                    </div>
                </article>
            ))}
        </section>
    );
};

WatchlistStats.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default WatchlistStats;
