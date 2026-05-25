import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import GlobalInitialLoader from "../components/GlobalInitialLoader/GlobalInitialLoader";

const Layout = () => {
    const [showInitialLoader, setShowInitialLoader] = useState(true);
    const [isInitialLoaderExiting, setIsInitialLoaderExiting] = useState(false);

    // Fade out initial loader
    useEffect(() => {
        const fadeTimeoutId = window.setTimeout(() => {
            setIsInitialLoaderExiting(true);
        }, 500);

        const hideTimeoutId = window.setTimeout(() => {
            setShowInitialLoader(false);
        }, 720);

        return () => {
            window.clearTimeout(fadeTimeoutId);
            window.clearTimeout(hideTimeoutId);
        };
    }, []);

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {showInitialLoader && (
                <GlobalInitialLoader isExiting={isInitialLoaderExiting} />
            )}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
