import Header from "../../components/Header/Header";
import HomeSearch from "../../components/HomeSearch/HomeSearch";
import HomeResults from "../../components/HomeResults/HomeResults";
import useMovieSearchControls from "../../hooks/useMovieSearchControls";
import useFetchMovies from "../../hooks/useFetchMovies";
import useDebounce from "../../hooks/useDebounce";


const Home = () => {
    const {
        searchQuery,
        currentPage,
        viewMode,
        handleChange,
        handlePageChange,
        handleViewChange,
    } = useMovieSearchControls();
    const debouncedValue = useDebounce(searchQuery);
    const { moviesData, isLoading, error, totalPages, totalResultsNum } =
        useFetchMovies({ searchQuery: debouncedValue, currentPage });

    return (
        <div className="homePage">
            <Header />

            {/* ======== Search Section ======== */}
            <div className="container">
                <HomeSearch
                    searchQuery={searchQuery}
                    handleChange={handleChange}
                    viewMode={viewMode}
                    handleViewChange={handleViewChange}
                    totalResultsNum={totalResultsNum}
                />

                <HomeResults
                    moviesData={moviesData}
                    isLoading={isLoading}
                    error={error}
                    viewMode={viewMode}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalResultsNum={totalResultsNum}
                    handlePageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Home;
