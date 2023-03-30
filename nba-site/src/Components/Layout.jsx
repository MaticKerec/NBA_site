import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React from "react";
import Box from "@mui/material/Box"
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Box sx={{ minHeight: 'calc(100vh - 150px)' }}>
                <main>
                    {children}
                </main>
            </Box>
            <Footer />
        </>
    );
};

export default Layout;