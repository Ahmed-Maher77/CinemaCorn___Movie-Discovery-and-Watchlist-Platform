import "./MoviesContainer.css";
import notFoundIcon from "../../assets/images/notFound-icon.svg";

const MoviesNotFound = () => {
  return (
    <div className="moviesNotFound">
        <img src={notFoundIcon} alt="No movies found" />
        <div className="message-info">
            <h2>No movies found</h2>
            <p>No movies matched your search. Please try different keywords.</p>
        </div>
    </div>
  )
}

export default MoviesNotFound
