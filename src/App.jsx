import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import GlobalInitialLoader from "./components/GlobalInitialLoader/GlobalInitialLoader";

const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
const MovieDetails = React.lazy(
    () => import("./pages/MovieDetails/MovieDetails"),
);
const Watchlist = React.lazy(() => import("./pages/Watchlist/Watchlist"));
const Favorites = React.lazy(() => import("./pages/Favorites/Favorites"));
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: (
                    <Suspense fallback={<GlobalInitialLoader />}>
                        <Home />
                    </Suspense>
                ),
                index: true,
            },
            {
                path: "/movies/:id",
                element: (
                    <Suspense fallback={<GlobalInitialLoader />}>
                        <MovieDetails />
                    </Suspense>
                ),
            },
            {
                path: "/watchlist",
                element: (
                    <Suspense fallback={<GlobalInitialLoader />}>
                        <Watchlist />
                    </Suspense>
                ),
            },
            {
                path: "/favorites",
                element: (
                    <Suspense fallback={<GlobalInitialLoader />}>
                        <Favorites />
                    </Suspense>
                ),
            },
            {
                path: "*",
                element: (
                    <Suspense fallback={<GlobalInitialLoader />}>
                        <NotFound />
                    </Suspense>
                ),
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
