import PropTypes from "prop-types";
import React from "react";
import MovieMeta from "./MovieMeta";
import ReleaseStatus from "./ReleaseStatus";
import WatchlistButton from "./WatchlistButton";
import GenreChips from "./GenreChips";

const MovieHero = ({ movie, backdropUrl }) => {
    return (
        <section
            className="movieHero"
            style={
                backdropUrl
                    ? { backgroundImage: `url(${backdropUrl})` }
                    : undefined
            }
        >
            <div className="movieHeroLayer">
                <ReleaseStatus movie={movie} />
                <WatchlistButton movie={movie} />

                <p className="movieHeroLabel">Movie details</p>
                <h1>{movie.title}</h1>

                <div className="movieHeroRow">
                    <div className="movieHeroTags">
                        <GenreChips genres={movie.genres} />
                    </div>

                    <MovieMeta movie={movie} />
                </div>
            </div>
        </section>
    );
};

MovieHero.propTypes = {
    movie: PropTypes.object.isRequired,
    backdropUrl: PropTypes.string,
};

export default MovieHero;
