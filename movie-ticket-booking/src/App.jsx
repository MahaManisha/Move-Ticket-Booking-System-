import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Movies from "./pages/Movies.jsx";
import Contact from "./pages/Contact.jsx";
import Theaters from "./pages/Theaters.jsx";
import MyBookings from "./pages/MyBookings.jsx";

import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/theaters" element={<Theaters />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <footer className="footer-premium">
        <p>&copy; 2025 CinemaBook. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;