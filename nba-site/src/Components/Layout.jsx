import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React from "react";
import Box from "@mui/material/Box"
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Box>
                <main>
                    {children}
                </main>
            </Box>
            <Footer />
        </>
    );
};

export default Layout;