import { useEffect, useState } from "react";

const WATCHLIST_STORAGE_EVENT = "watchlistchange";

const readWatchlist = () => {
    try {
        const raw = localStorage.getItem("watchlist");
        return raw ? JSON.parse(raw) : [];
    } catch (error) {
        return [];
    }
};

const useWatchlistState = (movieId) => {
    const [inWatchlist, setInWatchlist] = useState(false);

    useEffect(() => {
        const syncState = () => {
            const list = readWatchlist();
            setInWatchlist(list.includes(movieId));
        };

        syncState();

        window.addEventListener(WATCHLIST_STORAGE_EVENT, syncState);
        window.addEventListener("storage", syncState);

        return () => {
            window.removeEventListener(WATCHLIST_STORAGE_EVENT, syncState);
            window.removeEventListener("storage", syncState);
        };
    }, [movieId]);

    const toggleWatchlist = () => {
        try {
            const list = readWatchlist();
            const exists = list.includes(movieId);
            const nextList = exists
                ? list.filter((id) => id !== movieId)
                : [...list, movieId];

            localStorage.setItem("watchlist", JSON.stringify(nextList));
            setInWatchlist(!exists);
            window.dispatchEvent(new Event(WATCHLIST_STORAGE_EVENT));

            return { success: true, added: !exists };
        } catch (error) {
            return { success: false, error };
        }
    };

    return { inWatchlist, toggleWatchlist };
};

export default useWatchlistState;
