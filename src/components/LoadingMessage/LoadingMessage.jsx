import PropTypes from "prop-types";
import "./LoadingMessage.css";

const LoadingMessage = ({ message }) => {
    return (
        <div className="loading-message">
            <p>{message}</p>
            <div className="loader"></div>
        </div>
    );
};

LoadingMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default LoadingMessage;
