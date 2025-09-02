// App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import MovieCard from "./components/MovieCard.jsx";
import BookingForm from "./components/BookingForm.jsx";

// Import your separate page components
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/Signup.jsx";
import Movies from "./pages/Movies.jsx";
import Contact from "./pages/Contact.jsx";
import Theaters from "./pages/Theaters.jsx";
import MyBookings from "./pages/MyBookings.jsx";  

import "./index.css";
import "./App.css";

import movie1 from "./assets/movie1.jpg";
import movie2 from "./assets/movie2.jpg";

// ✅ Home Page Component
function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookings, setBookings] = useState([]);

  const movies = [
    {
      id: 1,
      title: "Coolie",
      genre: "Action",
      duration: "3h 12m",
      rating: "PG-13",
      description:
        "Coolie tells the thrilling story of a courageous railway worker who fights against corruption and injustice, facing numerous challenges along the way.",
      showtimes: ["10:00 AM", "2:00 PM", "6:00 PM", "9:30 PM"],
      price: 15,
      image: movie1,
    },
    {
      id: 2,
      title: "Thailaivan Thailavi",
      genre: "Dramatic",
      duration: "2h 11m",
      rating: "PG-13",
      description:
        "Thailaivan Thailavi explores the emotional journey of a leader struggling with personal and political challenges, highlighting the sacrifices made for his people.",
      showtimes: ["11:00 AM", "3:00 PM", "7:00 PM", "10:00 PM"],
      price: 12,
      image: movie2,
    },
  ];

  const handleBookMovie = (movie) => {
    setSelectedMovie(movie);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (bookingData) => {
    const newBooking = {
      id: Date.now(),
      ...bookingData,
      movie: selectedMovie,
      totalAmount: selectedMovie.price * bookingData.tickets,
    };
    setBookings([...bookings, newBooking]);
    setShowBookingForm(false);
    setSelectedMovie(null);
    alert("Booking confirmed! Check your email for tickets.");
  };

  const handleCloseBooking = () => {
    setShowBookingForm(false);
    setSelectedMovie(null);
  };

  return (
    <main className="main-content">
      <section className="hero">
        <h1>Book Your Movie Experience</h1>
        <p>Discover the latest blockbusters and book your tickets instantly</p>
      </section>

      <section className="movies-section">
        <h2>Now Showing</h2>
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onBook={() => handleBookMovie(movie)}
            />
          ))}
        </div>
      </section>

      {showBookingForm && (
        <BookingForm
          movie={selectedMovie}
          onSubmit={handleBookingSubmit}
          onClose={handleCloseBooking}
        />
      )}

      {bookings.length > 0 && (
        <section className="bookings-section">
          <h2>Your Bookings</h2>
          <div className="bookings-list">
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-item">
                <h3>{booking.movie.title}</h3>
                <p>Date: {booking.date}</p>
                <p>Time: {booking.showtime}</p>
                <p>Tickets: {booking.tickets}</p>
                <p>Total: ${booking.totalAmount}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

// ✅ Main App
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

      <footer className="footer">
        <p>&copy; 2025 CinemaBook. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;