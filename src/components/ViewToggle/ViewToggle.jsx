import "./ViewToggle.css";

const ViewToggle = ({ viewMode, onViewChange }) => {
    return (
        <div className="view-toggle" role="toolbar" aria-label="Toggle view">
            <button
                type="button"
                className={
                    "view-btn" + (viewMode === "horizontal" ? " active" : "")
                }
                aria-pressed={viewMode === "horizontal"}
                title="Horizontal list"
                onClick={() => onViewChange("horizontal")}
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                >
                    <rect
                        x="3"
                        y="5"
                        width="18"
                        height="2.5"
                        rx="1"
                        fill="currentColor"
                    />
                    <rect
                        x="3"
                        y="10.75"
                        width="18"
                        height="2.5"
                        rx="1"
                        fill="currentColor"
                    />
                    <rect
                        x="3"
                        y="16.5"
                        width="18"
                        height="2.5"
                        rx="1"
                        fill="currentColor"
                    />
                </svg>
            </button>

            <button
                type="button"
                className={"view-btn" + (viewMode === "grid" ? " active" : "")}
                aria-pressed={viewMode === "grid"}
                title="Grid view"
                onClick={() => onViewChange("grid")}
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                >
                    <rect
                        x="3"
                        y="3"
                        width="8"
                        height="8"
                        rx="1"
                        fill="currentColor"
                    />
                    <rect
                        x="13"
                        y="3"
                        width="8"
                        height="8"
                        rx="1"
                        fill="currentColor"
                    />
                    <rect
                        x="3"
                        y="13"
                        width="8"
                        height="8"
                        rx="1"
                        fill="currentColor"
                    />
                    <rect
                        x="13"
                        y="13"
                        width="8"
                        height="8"
                        rx="1"
                        fill="currentColor"
                    />
                </svg>
            </button>
        </div>
    );
};

export default ViewToggle;
