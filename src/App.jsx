import React from "react"
import { Home, Footer, Reservations, Navbar, Order, Login } from "./components"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/order" element={<Order />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
