import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchParams, setSearchParams] = useSearchParams(searchQuery);
    const [moviesData, setMoviesData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Initialize search query from URL
    useEffect(() => {
        const query = searchParams.get("search") || "";
        setSearchQuery(query);
    }, []);

    // Update search query and URL
    const handleChange = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        setSearchParams({ search: e.target.value });
    };

    // fetch movies based on search query
    useEffect(() => {
        fetchMovies();
    }, [searchQuery]);

    const fetchMovies = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${import.meta.VITE_TMDB_API_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
            const data = response.data.results;
            console.log(data);
    
            setMoviesData(data);
            setError(null);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="homePage">
            <Header />

            {/* ======== Search Section ======== */}
            <div className="container">
                <div className="search-container">
                    <SearchBar searchQuery={searchQuery} handleChange={handleChange} />
                    <span className="results-count">
                        Found <b>{moviesData.length}</b> results
                    </span>
                </div>
                <MoviesContainer data={moviesData} error={error} isLoading={isLoading} />
            </div>
        </div>
    );
};

export default Home;
