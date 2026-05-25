import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import MovieHero from "./components/MovieHero";
import MovieDetailsBody from "./components/MovieDetailsBody";
import "./MovieDetails.css";

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setIsLoading(true);

            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&append_to_response=videos`,
                );

                setMovie(response.data);
                setError(null);
            } catch (fetchError) {
                setError(fetchError);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchMovieDetails();
        }
    }, [id]);

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
            return;
        }

        navigate("/");
    };

    const posterUrl = movie?.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null;

    const backdropUrl = movie?.backdrop_path
        ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
        : null;

    return (
        <div className="movieDetailsPage">
            <Header />

            <div className="container movieDetailsContainer">
                <div className="movieDetailsTopbar">
                    <button
                        type="button"
                        onClick={handleBack}
                        className="backButton"
                        aria-label="Go back"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden
                        >
                            <path
                                d="M14.5 5.5a1 1 0 0 1 0 1.414L10.414 11H20a1 1 0 1 1 0 2h-9.586l4.086 4.086a1 1 0 0 1-1.414 1.414l-5.793-5.793a1 1 0 0 1 0-1.414l5.793-5.793a1 1 0 0 1 1.414 0Z"
                                fill="currentColor"
                            />
                        </svg>
                        Back
                    </button>

                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>{movie?.title || "Movie details"}</span>
                    </nav>
                </div>

                {isLoading && (
                    <p className="movieDetailsState">
                        Loading movie details...
                    </p>
                )}

                {!isLoading && error && (
                    <p className="movieDetailsState error">
                        Failed to load movie details. Please try again.
                    </p>
                )}

                {!isLoading && !error && movie && (
                    <>
                        <MovieHero movie={movie} backdropUrl={backdropUrl} />

                        {(() => {
                            const trailer =
                                movie?.videos?.results?.find(
                                    (v) =>
                                        v.site === "YouTube" &&
                                        (v.type === "Trailer" ||
                                            v.type === "Teaser"),
                                ) || movie?.videos?.results?.[0];

                            const trailerUrl = trailer
                                ? `https://www.youtube.com/watch?v=${trailer.key}`
                                : null;

                            return (
                                <MovieDetailsBody
                                    movie={movie}
                                    posterUrl={posterUrl}
                                    trailerUrl={trailerUrl}
                                />
                            );
                        })()}
                    </>
                )}
            </div>
        </div>
    );
};

export default MovieDetails;
