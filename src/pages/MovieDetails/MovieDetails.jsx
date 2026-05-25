import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import MovieHero from "./components/MovieHero";
import MovieDetailsBody from "./components/MovieDetailsBody";
import MovieDetailsState from "./components/MovieDetailsState";
import MovieDetailsTopbar from "./components/MovieDetailsTopbar";
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
                <MovieDetailsTopbar
                    movieTitle={movie?.title}
                    onBack={handleBack}
                />

                {isLoading && (
                    <MovieDetailsState>
                        Loading movie details...
                    </MovieDetailsState>
                )}

                {!isLoading && error && (
                    <MovieDetailsState isError>
                        Failed to load movie details. Please try again.
                    </MovieDetailsState>
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
