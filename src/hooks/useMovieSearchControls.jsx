import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useMovieSearchControls = () => {
    const [searchQuery, setSearchQuery] = useState("Furiosa");
    const [searchParams, setSearchParams] = useSearchParams(
        "search=Furiosa&page=1&view=grid",
    );
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState("horizontal");

    const syncUrlParams = ({ query, page, view }) => {
        const nextParams = {};

        if (query) {
            nextParams.search = query;
        }

        if (page && page > 1) {
            nextParams.page = String(page);
        }

        if (view && view !== "horizontal") {
            nextParams.view = view;
        }

        setSearchParams(nextParams);
    };

    useEffect(() => {
        const query = searchParams.get("search") || "";
        const pageFromUrl = Number(searchParams.get("page") || 1);
        const viewFromUrl =
            searchParams.get("view") === "grid" ? "grid" : "horizontal";

        setSearchQuery(query);
        setCurrentPage(
            Number.isFinite(pageFromUrl) && pageFromUrl > 0 ? pageFromUrl : 1,
        );
        setViewMode(viewFromUrl);
    }, [searchParams]);

    const handleChange = (e) => {
        const value = e.target?.value || "";

        setSearchQuery(value);
        setCurrentPage(1);

        syncUrlParams({ query: value, page: 1, view: viewMode });
    };

    const handlePageChange = (nextPage) => {
        setCurrentPage(nextPage);
        syncUrlParams({ query: searchQuery, page: nextPage, view: viewMode });
    };

    const handleViewChange = (nextView) => {
        setViewMode(nextView);
        syncUrlParams({
            query: searchQuery,
            page: currentPage,
            view: nextView,
        });
    };

    return {
        searchQuery,
        currentPage,
        viewMode,
        handleChange,
        handlePageChange,
        handleViewChange,
    };
};

export default useMovieSearchControls;
