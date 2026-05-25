import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import WatchlistEmptyState from "./components/WatchlistEmptyState";
import WatchlistIntro from "./components/WatchlistIntro";
import WatchlistMovieCard from "./components/WatchlistMovieCard";
import WatchlistStats from "./components/WatchlistStats";
import "./Watchlist.css";

const readWatchlistIds = () => {
    try {
        const raw = localStorage.getItem("watchlist");
        const parsed = raw ? JSON.parse(raw) : [];

        return Array.isArray(parsed)
            ? parsed.map((movieId) => Number(movieId)).filter(Number.isFinite)
            : [];
    } catch {
        return [];
    }
};

const Watchlist = () => {
    const [watchlistIds, setWatchlistIds] = useState(() => readWatchlistIds());
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [viewMode, setViewMode] = useState("grid");

    useEffect(() => {
        const handleStorageChange = () => {
            setWatchlistIds(readWatchlistIds());
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    useEffect(() => {
        const fetchWatchlistMovies = async () => {
            if (watchlistIds.length === 0) {
                setMovies([]);
                setError(null);
                return;
            }

            setIsLoading(true);

            try {
                const requests = watchlistIds.map((movieId) =>
                    axios.get(
                        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
                    ),
                );

                const responses = await Promise.all(requests);
                const resultsById = new Map(
                    responses.map((response) => [
                        response.data.id,
                        response.data,
                    ]),
                );

                const orderedMovies = watchlistIds
                    .map((movieId) => resultsById.get(movieId))
                    .filter(Boolean);

                setMovies(orderedMovies);
                setError(null);
            } catch (fetchError) {
                setError(fetchError);
            } finally {
                setIsLoading(false);
            }
        };

        fetchWatchlistMovies();
    }, [watchlistIds]);

    const removeFromWatchlist = (movieId) => {
        const nextIds = watchlistIds.filter((savedId) => savedId !== movieId);
        setWatchlistIds(nextIds);
        localStorage.setItem("watchlist", JSON.stringify(nextIds));
        setMovies((currentMovies) =>
            currentMovies.filter((movie) => movie.id !== movieId),
        );
    };

    return (
        <div className="watchlistPage">
            <Header />

            <main className="container watchlistContainer">
                <WatchlistStats movies={movies} />

                <WatchlistIntro
                    watchlistCount={watchlistIds.length}
                    viewMode={viewMode}
                    onViewChange={setViewMode}
                />

                {isLoading && (
                    <p className="watchlistState">Loading your watchlist...</p>
                )}

                {!isLoading && error && (
                    <p className="watchlistState error">
                        Failed to load your saved movies. Please try again.
                    </p>
                )}

                {!isLoading && !error && movies.length === 0 && (
                    <WatchlistEmptyState />
                )}

                {!isLoading && !error && movies.length > 0 && (
                    <div
                        className={`watchlistGrid ${
                            viewMode === "grid"
                                ? "watchlistGrid--grid"
                                : "watchlistGrid--list"
                        }`}
                    >
                        {movies.map((movie) => {
                            return (
                                <WatchlistMovieCard
                                    key={movie.id}
                                    movie={movie}
                                    onRemove={removeFromWatchlist}
                                    viewMode={viewMode}
                                />
                            );
                        })}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Watchlist;
