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

export default GenreChips;
