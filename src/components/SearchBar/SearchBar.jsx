import searchIcon from "../../assets/images/search.svg";
import xIcon from "../../assets/images/x-icon.svg";
import "./SearchBar.css";


const SearchBar = ({ searchQuery, handleChange }) => {
    return (
        <div className="searchBar">
            {/* ======= search input ======= */}
            <label htmlFor="movies-search">
                <img src={searchIcon} alt="Search" />
            </label>

            {/* ======= input ======= */}
            <input
                type="text"
                name="movies-search"
                id="movies-search"
                placeholder="Search for movies..."
                value={searchQuery}
                onChange={handleChange}
            />

            {/* ======= clear button ======= */}
            {searchQuery && (
                <button type="button" className="clear-icon" onClick={() => handleChange({ target: { value: "" } })}>
                    <img src={xIcon} alt="Clear" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
