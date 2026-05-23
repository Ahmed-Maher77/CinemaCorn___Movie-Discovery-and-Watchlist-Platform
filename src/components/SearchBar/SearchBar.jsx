import searchIcon from "../../assets/images/search.svg";
import xIcon from "../../assets/images/x-icon.svg";
import "./SearchBar.css";


const SearchBar = ({ searchQuery, handleChange }) => {
    return (
        <div className="searchBar">
            <label htmlFor="movies-search">
                <img src={searchIcon} alt="Search" />
            </label>
            <input
                type="text"
                name="movies-search"
                id="movies-search"
                placeholder="Search for movies..."
                value={searchQuery}
                onChange={handleChange}
            />
            {searchQuery && (
                <img className="clear-icon" src={xIcon} alt="Clear" />
            )}
        </div>
    );
};

export default SearchBar;
