import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./pages/Layout";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Watchlist from "./pages/Watchlist/Watchlist";
import Favorites from "./pages/Favorites/Favorites";
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <Home />,
                index: true,
            },
            {
                path: "/movies/:id",
                element: <MovieDetails />,
            },
            {
                path: "/watchlist",
                element: <Watchlist />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
