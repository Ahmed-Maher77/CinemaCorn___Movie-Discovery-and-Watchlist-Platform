import PropTypes from "prop-types";
import React from "react";

const GenreChips = ({ genres = [] }) => {
    return (
        <>
            {genres?.slice(0, 2).map((genre) => (
                <span key={genre.id} className="genreChip">
                    {genre.name}
                </span>
            ))}
        </>
    );
};

GenreChips.propTypes = {
    genres: PropTypes.array,
};

export default GenreChips;
