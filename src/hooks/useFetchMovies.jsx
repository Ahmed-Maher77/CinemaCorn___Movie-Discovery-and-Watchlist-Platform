import axios from "axios";
import { useEffect, useState } from "react";

const useFetchMovies = ({ searchQuery, currentPage }) => {
    const [moviesData, setMoviesData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResultsNum, setTotalResultsNum] = useState(0);

    // fetch movies based on search query
    useEffect(() => {
        fetchMovies();
    }, [searchQuery, currentPage]);

    const fetchMovies = async () => {
        if (!searchQuery) {
            setMoviesData([]);
            setTotalPages(0);
            setTotalResultsNum(0);
            setError(null);
            return;
        }

        setIsLoading(true);
        try {
            // TMDB returns 20 results per API page. We want 10 per UI page,
            // so request the TMDB page that contains our desired slice.
            const tmdbPage = Math.ceil(currentPage / 2) || 1;

            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
                    searchQuery,
                )}&api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=${tmdbPage}`,
            );

            const results = response.data.results || [];

            // For odd/even currentPage, pick slice 0-9 or 10-19 from the TMDB page
            const offset = ((currentPage - 1) % 2) * 10;
            const pageItems = results.slice(offset, offset + 10);

            const totalResults = response.data.total_results || 0;
            setTotalPages(Math.ceil(totalResults / 10));

            setMoviesData(pageItems);
            setTotalResultsNum(totalResults);
            setError(null);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return { moviesData, isLoading, error, totalPages, totalResultsNum };
};


export default useFetchMovies;