import React from "react";
import { useState } from 'react'
import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./Components/Home"
import Layout from "./Components/Layout.jsx";
import Teams from "./Components/Teams.jsx";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/teams" element={<Teams />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    )
}
export default App
