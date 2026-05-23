import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./pages/Layout";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Watchlist from "./pages/Watchlist/Watchlist";
import Favorites from "./pages/Favorites/Favorites";
import "./App.css";


const App = () => {
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
                    path: "/favorites",
                    element: <Favorites />,
                },
                {
                    path: "*",
                    element: <NotFound />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
