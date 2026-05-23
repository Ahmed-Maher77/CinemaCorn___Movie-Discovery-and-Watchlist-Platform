import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>🍿 CinemaCorn</h1>
                <SocialMediaLinks />
            </div>
        </header>
    );
};

export default Header;
