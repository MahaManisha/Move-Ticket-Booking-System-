import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Play, Calendar, MapPin, Star } from "lucide-react";
import BookingForm from "../components/BookingForm";

const Home = () => {
  const { movies } = useContext(AppContext);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Your Ultimate Movie Experience</h1>
          <p className="hero-subtitle">
            Book tickets for the latest blockbusters and indie films.
            Discover showtimes, reserve your seats, and enjoy the magic of cinema.
          </p>
          <div className="hero-actions">
            <Link to="/movies" className="btn btn-primary">
              <Play size={20} />
              Browse Movies
            </Link>
            <Link to="/theaters" className="btn btn-outline">
              <MapPin size={20} />
              Find Theaters
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Movies Section */}
      <div className="section container">
        <h2 className="section-title">Now Showing</h2>
        <div className="movie-grid">
          {movies.slice(0, 3).map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt={movie.title} className="movie-img" />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p className="movie-genre">{movie.genre}</p>
                <div className="movie-meta">
                  <div className="movie-rating">
                    <Star size={16} fill="currentColor" className="star-icon" />
                    <span>{movie.rating}</span>
                  </div>
                  <button
                    onClick={() => setSelectedMovie(movie)}
                    className="btn btn-primary btn-sm"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Calendar className="feature-icon text-primary" size={48} />
              <h3>Easy Booking</h3>
              <p>Quick and hassle-free ticket booking with just a few clicks. Select your seats and payment method easily.</p>
            </div>
            <div className="feature-card">
              <MapPin className="feature-icon text-success" size={48} />
              <h3>Multiple Locations</h3>
              <p>Find theaters near you with our comprehensive location finder. We partner with theaters across the city.</p>
            </div>
            <div className="feature-card">
              <Star className="feature-icon text-warning" size={48} />
              <h3>Best Experience</h3>
              <p>Premium sound systems, comfortable seating, and the latest projection technology for an unforgettable experience.</p>
            </div>
          </div>
        </div>
      </div>

      {selectedMovie && (
        <BookingForm
          movie={selectedMovie}
          onSubmit={() => {
            setSelectedMovie(null);
            navigate("/mybookings");
          }}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Home;
