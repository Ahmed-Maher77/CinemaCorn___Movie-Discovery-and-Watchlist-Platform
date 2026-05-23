import React from 'react'

const MovieCard = ({ title, year, rating }) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
    </article>
  )
}

export default MovieCard
