import "./Header.css";
import { Link } from "react-router-dom";
import starIcon from "../../assets/images/star-svgrepo.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                {/* ======= logo ======= */}
                <h1>
                    <Link to="/">🍿 CinemaCorn</Link>
                </h1>

                {/* ======= watchlist link ======= */}
                <Link to="/watchlist" className="headerWatchlistLink">
                    <img src={starIcon} alt="" aria-hidden />
                    <span>Watchlist</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
