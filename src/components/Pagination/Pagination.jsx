import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, isLoading, onPageChange }) => {
    const safeTotalPages = totalPages || 1;

    return (
        <div className="pagination">
            <button
                type="button"
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage <= 1 || isLoading}
            >
                Prev
            </button>

            <span className="pagination-info">
                Page <strong>{currentPage}</strong> of{" "}
                <strong>{safeTotalPages}</strong>
            </span>

            <button
                type="button"
                onClick={() =>
                    onPageChange(Math.min(safeTotalPages, currentPage + 1))
                }
                disabled={currentPage >= safeTotalPages || isLoading}
            >
                Next
            </button>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
