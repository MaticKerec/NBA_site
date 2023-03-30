import React from "react";
import { useState } from 'react'
import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./Components/Home"
import Layout from "./Components/Layout.jsx";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    )
}
export default App
