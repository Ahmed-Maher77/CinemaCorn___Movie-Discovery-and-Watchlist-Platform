import PropTypes from "prop-types";
import React, { useState } from "react";
import useWatchlistState from "../../../hooks/useWatchlistState";

const WatchlistButton = ({ movie }) => {
    const { inWatchlist, toggleWatchlist: toggleWatchlistState } =
        useWatchlistState(movie.id);
    const [toast, setToast] = useState(null);
    const [toastType, setToastType] = useState("success");

    const toggleWatchlist = () => {
        const result = toggleWatchlistState();

        if (result.success) {
            setToast(
                result.added ? "Added to watchlist" : "Removed from watchlist",
            );
            setToastType("success");
        } else {
            setToast("Watchlist update failed");
            setToastType("error");
        }

        window.setTimeout(() => setToast(null), 1800);
    };

    return (
        <>
            <button
                type="button"
                className={
                    "watchlistButtonTop" + (inWatchlist ? " active" : "")
                }
                onClick={toggleWatchlist}
                aria-pressed={inWatchlist}
                aria-label={
                    inWatchlist ? "Remove from watchlist" : "Add to watchlist"
                }
            >
                <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </button>
            {toast && (
                <div className={`watchlistToast ${toastType}`}>
                    <span className="watchlistToastIcon" aria-hidden>
                        {toastType === "error" ? (
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

                    <span>{toast}</span>
                </div>
            )}
        </>
    );
};

WatchlistButton.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default WatchlistButton;
