import PropTypes from "prop-types";
import "./GlobalInitialLoader.css";

const GlobalInitialLoader = ({ isExiting = false }) => {
    return (
        <div
            className={`globalInitialLoaderLayer${isExiting ? " isExiting" : ""}`}
            role="status"
            aria-live="polite"
            aria-label="Loading app"
        >
            <div className="globalInitialLoader" />
            <p className="globalInitialLoaderText">
                Loading your movie experience...
            </p>
        </div>
    );
};

GlobalInitialLoader.propTypes = {
    isExiting: PropTypes.bool,
};

export default GlobalInitialLoader;
