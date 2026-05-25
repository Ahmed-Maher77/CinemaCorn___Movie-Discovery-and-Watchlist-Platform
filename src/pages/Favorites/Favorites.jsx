import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const Favorites = () => {
    return (
        <div className="favoritesPage">
            <Header />

            <main className="container" style={{ paddingBlock: "32px 56px" }}>
                <h1 style={{ color: "var(--color-fff)", marginBottom: "12px" }}>
                    Favorites
                </h1>
                <p
                    style={{
                        color: "var(--color-c9ced7)",
                        marginBottom: "18px",
                    }}
                >
                    This section is available for future saved favorites.
                </p>
                <Link
                    to="/"
                    style={{
                        display: "inline-flex",
                        padding: "11px 16px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        background:
                            "linear-gradient(90deg, var(--color-rgba-0-126-255-0-24), var(--color-rgba-0-170-255-0-16))",
                        color: "var(--color-eaf3ff)",
                        border: "1px solid var(--color-rgba-174-183-196-0-18)",
                    }}
                >
                    Back to home
                </Link>
            </main>
        </div>
    );
};

export default Favorites;
