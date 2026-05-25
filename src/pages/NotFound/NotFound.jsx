import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import notFoundIcon from "../../assets/images/search.svg";
import arrowIcon from "../../assets/images/arrow-up-right.svg";

const NotFound = () => {
    return (
        <main className="notFoundPage" aria-labelledby="notfound-heading">
            <section className="notFoundCard">
                {/* ======= not found icon ======= */}
                <img
                    src={notFoundIcon}
                    alt="Not found"
                    className="notFoundIcon"
                />

                {/* ======= not found message ======= */}
                <h1 id="notfound-heading">Page not found</h1>
                <p className="notFoundMsg">
                    We couldn't find the page you're looking for.
                </p>

                {/* ======= not found actions ======= */}
                <div className="notFoundActions">
                    <Link to="/" className="notFoundBtn">
                        Go home
                    </Link>
                    <Link to="/" className="notFoundLink">
                        Explore movies <img src={arrowIcon} alt="" />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default NotFound;
