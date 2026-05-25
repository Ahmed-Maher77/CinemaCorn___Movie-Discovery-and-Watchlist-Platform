import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import useWatchlistState from "../../../hooks/useWatchlistState";
import MovieDetailsInfo from "./MovieDetailsInfo";
import MovieDetailsPoster from "./MovieDetailsPoster";

const MovieDetailsBody = ({ movie, posterUrl, trailerUrl }) => {
    const { inWatchlist, toggleWatchlist } = useWatchlistState(movie.id);
    const [feedback, setFeedback] = useState(null);
    const feedbackTimerRef = useRef(null);

    useEffect(() => {
        return () => {
            window.clearTimeout(feedbackTimerRef.current);
        };
    }, []);

    const showFeedback = (message, type = "success") => {
        window.clearTimeout(feedbackTimerRef.current);
        setFeedback({ message, type });
        feedbackTimerRef.current = window.setTimeout(() => {
            setFeedback(null);
        }, 1800);
    };

    const handleToggleWatchlist = () => {
        const result = toggleWatchlist();

        if (result.success) {
            showFeedback(
                result.added ? "Added to watchlist" : "Removed from watchlist",
                "success",
            );
        } else {
            showFeedback("Watchlist update failed", "error");
        }
    };

    return (
        <section className="movieDetailsBody">
            <MovieDetailsPoster
                posterUrl={posterUrl}
                trailerUrl={trailerUrl}
                movie={movie}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <MovieDetailsInfo movie={movie} trailerUrl={trailerUrl} />

                <div className="movieDetailsActions">
                    <button
                        type="button"
                        className={`addToListButton ${inWatchlist ? "in" : "out"}`}
                        onClick={handleToggleWatchlist}
                        aria-pressed={inWatchlist}
                        aria-label={
                            inWatchlist
                                ? "Remove from watchlist"
                                : "Add to watchlist"
                        }
                    >
                        <span className="buttonGlow" />

                        <span className="buttonIcon" aria-hidden>
                            {inWatchlist ? (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 6L9 17L4 12"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 5V19"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M5 12H19"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            )}
                        </span>

                        <span className="buttonText">
                            {inWatchlist ? "Added to List" : "Add to List"}
                        </span>
                    </button>
                    {feedback && (
                        <div className={`watchlistToast ${feedback.type}`}>
                            <span className="watchlistToastIcon" aria-hidden>
                                {feedback.type === "error" ? (
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm0 12.2a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.2 16.2 4.8 11.8a1 1 0 0 1 1.4-1.4l3 3 8.6-8.6a1 1 0 0 1 1.4 1.4l-9.3 9.3a1 1 0 0 1-1.4 0Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                )}
                            </span>
                            <span>{feedback.message}</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

MovieDetailsBody.propTypes = {
    movie: PropTypes.object.isRequired,
    posterUrl: PropTypes.string,
    trailerUrl: PropTypes.string,
};

export default MovieDetailsBody;
