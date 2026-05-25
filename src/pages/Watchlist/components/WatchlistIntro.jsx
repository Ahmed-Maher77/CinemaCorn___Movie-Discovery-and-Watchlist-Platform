import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import arrowIcon from "../../../assets/images/arrow-up-right.svg";

const WatchlistIntro = ({ watchlistCount, viewMode, onViewChange }) => {
    return (
        <section className="watchlistIntro">
            <div>
                <p className="watchlistEyebrow">Saved for later</p>
                <h1>Watchlist</h1>
                <p>
                    {watchlistCount > 0
                        ? `You have ${watchlistCount} saved movie${watchlistCount === 1 ? "" : "s"} waiting for you.`
                        : "Save movies from any details page and they will appear here."}
                </p>
            </div>

            <div className="watchlistIntroActions">
                <div
                    className="view-toggle"
                    role="toolbar"
                    aria-label="Toggle watchlist view"
                >
                    <button
                        type="button"
                        className={
                            "view-btn" + (viewMode === "list" ? " active" : "")
                        }
                        aria-pressed={viewMode === "list"}
                        title="List view"
                        onClick={() => onViewChange("list")}
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden
                        >
                            <rect
                                x="3"
                                y="5"
                                width="18"
                                height="2.5"
                                rx="1"
                                fill="currentColor"
                            />
                            <rect
                                x="3"
                                y="10.75"
                                width="18"
                                height="2.5"
                                rx="1"
                                fill="currentColor"
                            />
                            <rect
                                x="3"
                                y="16.5"
                                width="18"
                                height="2.5"
                                rx="1"
                                fill="currentColor"
                            />
                        </svg>
                    </button>

                    <button
                        type="button"
                        className={
                            "view-btn" + (viewMode === "grid" ? " active" : "")
                        }
                        aria-pressed={viewMode === "grid"}
                        title="Grid view"
                        onClick={() => onViewChange("grid")}
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden
                        >
                            <rect
                                x="3"
                                y="3"
                                width="8"
                                height="8"
                                rx="1"
                                fill="currentColor"
                            />
                            <rect
                                x="13"
                                y="3"
                                width="8"
                                height="8"
                                rx="1"
                                fill="currentColor"
                            />
                            <rect
                                x="3"
                                y="13"
                                width="8"
                                height="8"
                                rx="1"
                                fill="currentColor"
                            />
                            <rect
                                x="13"
                                y="13"
                                width="8"
                                height="8"
                                rx="1"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>

                <Link to="/" className="watchlistHomeLink">
                    Browse movies
                    <img src={arrowIcon} alt="Browse movies" />
                </Link>
            </div>
        </section>
    );
};

WatchlistIntro.propTypes = {
    watchlistCount: PropTypes.number.isRequired,
    viewMode: PropTypes.string.isRequired,
    onViewChange: PropTypes.func.isRequired,
};

export default WatchlistIntro;
