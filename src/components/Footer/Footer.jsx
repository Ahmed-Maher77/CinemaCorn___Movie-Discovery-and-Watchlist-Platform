import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                {/* ======= footer top ======= */}
                <div className="footer-top">
                    <span>Copyrights reserved @ {currentYear}</span>
                    <SocialMediaLinks />
                </div>

                {/* ======= footer bottom ======= */}
                <div className="footer-bottom">
                    Designed and Developed by{" "}
                    <a
                        href="https://linkedin.com/in/ahmed-maher-algohary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ahmed Maher
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
