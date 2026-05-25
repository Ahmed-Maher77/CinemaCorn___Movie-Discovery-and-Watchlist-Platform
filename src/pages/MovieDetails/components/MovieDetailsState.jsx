import PropTypes from "prop-types";

const MovieDetailsState = ({ isError, children }) => {
    return (
        <p className={`movieDetailsState${isError ? " error" : ""}`}>
            {children}
        </p>
    );
};

MovieDetailsState.propTypes = {
    isError: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default MovieDetailsState;
