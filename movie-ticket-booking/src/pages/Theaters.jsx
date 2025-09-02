import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, Navigation } from 'lucide-react';
import './Theaters.css'; // Now this will be used properly

const Theaters = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const theaters = [
    {
      id: 1,
      name: "PVR Cinemas - Phoenix Mall",
      address: "Phoenix Mall, 142 Velachery Main Road, Chennai",
      city: "chennai",
      phone: "+91 44 4224 4224",
      rating: 4.2,
      screens: 8,
      facilities: ["IMAX", "4DX", "Dolby Atmos", "Parking"],
      distance: "2.5 km"
    },
    {
      id: 2,
      name: "INOX Leisure - Express Avenue",
      address: "Express Avenue Mall, Royapettah, Chennai",
      city: "chennai",
      phone: "+91 44 4224 4333",
      rating: 4.1,
      screens: 6,
      facilities: ["Dolby Atmos", "Parking", "Food Court"],
      distance: "3.8 km"
    },
    {
      id: 3,
      name: "Rohini Silver Screens",
      address: "Koyambedu, Chennai",
      city: "chennai",
      phone: "+91 44 2679 4224",
      rating: 4.0,
      screens: 4,
      facilities: ["DTS", "AC", "Parking"],
      distance: "5.2 km"
    },
    {
      id: 4,
      name: "AGS Cinemas - T. Nagar",
      address: "Narayana Reddy Street, T. Nagar, Chennai",
      city: "chennai",
      phone: "+91 44 4224 4555",
      rating: 3.9,
      screens: 5,
      facilities: ["Digital", "AC", "Snacks"],
      distance: "4.1 km"
    },
    {
      id: 5,
      name: "PVR Cinemas - Coimbatore",
      address: "Fun Republic Mall, Coimbatore",
      city: "coimbatore",
      phone: "+91 422 4224 4224",
      rating: 4.3,
      screens: 7,
      facilities: ["IMAX", "Dolby Atmos", "Parking", "Food Court"],
      distance: "1.8 km"
    },
    {
      id: 6,
      name: "Thangam Cinemas",
      address: "Madurai Main Road, Madurai",
      city: "madurai",
      phone: "+91 452 4224 4224",
      rating: 4.0,
      screens: 3,
      facilities: ["Digital", "AC", "Parking"],
      distance: "0.8 km"
    }
  ];

  const cities = [
    { value: 'all', label: 'All Cities' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'coimbatore', label: 'Coimbatore' },
    { value: 'madurai', label: 'Madurai' }
  ];

  const filteredTheaters = theaters.filter(theater => {
    const matchesCity = selectedCity === 'all' || theater.city === selectedCity;
    const matchesSearch = theater.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         theater.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCity && matchesSearch;
  });

  const handleGetDirections = (theaterName, address) => {
    alert(`Getting directions to ${theaterName} at ${address}`);
  };

  const handleViewShowtimes = (theaterName) => {
    alert(`Viewing showtimes for ${theaterName}. This would show available movies and times.`);
  };

  return (
    <div className="theaters-container">
      <div className="theaters-wrapper">

        {/* Header */}
        <div className="theaters-header">
          <h1 className="theaters-title">Find Theaters</h1>
          <p className="theaters-subtitle">Locate theaters near you and check showtimes</p>
        </div>

        {/* Search & Filter */}
        <div className="search-filter-card">
          <div className="search-filter-grid">
            <input
              type="text"
              placeholder="Search theaters or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="filter-select"
            >
              {cities.map(city => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Theater Cards */}
        <div className="theaters-list">
          {filteredTheaters.map(theater => (
            <div key={theater.id} className="theater-card">
              <div className="theater-card-content">

                <div className="theater-header">
                  {/* Theater Info */}
                  <div className="theater-info">
                    <h2 className="theater-name">{theater.name}</h2>

                    {/* Address & Phone */}
                    <div className="contact-info">
                      <div className="contact-item">
                        <MapPin size={16} className="contact-icon" />
                        <span className="contact-text">{theater.address}</span>
                      </div>
                      <div className="contact-item">
                        <Phone size={16} className="contact-icon" />
                        <span className="contact-text">{theater.phone}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="theater-stats">
                      <div className="rating">
                        <Star size={16} className="rating-star" fill="currentColor" />
                        <span className="rating-value">{theater.rating}</span>
                      </div>
                      <span className="stat-item">{theater.screens} screens</span>
                      <span className="distance">{theater.distance} away</span>
                    </div>

                    {/* Facilities */}
                    <div className="facilities-section">
                      <span className="facilities-label">Facilities:</span>
                      <div className="facilities-list">
                        {theater.facilities.map((facility, index) => (
                          <span key={index} className="facility-tag">{facility}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="action-buttons">
                    <button
                      onClick={() => handleViewShowtimes(theater.name)}
                      className="btn btn-primary"
                    >
                      <Clock size={16} className="btn-icon" />
                      Showtimes
                    </button>
                    <button
                      onClick={() => handleGetDirections(theater.name, theater.address)}
                      className="btn btn-success"
                    >
                      <Navigation size={16} className="btn-icon" />
                      Directions
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTheaters.length === 0 && (
          <div className="no-results">
            <MapPin size={48} className="no-results-icon" />
            <h3 className="no-results-title">No theaters found</h3>
            <p className="no-results-text">No theaters match your current search criteria.</p>
            <p className="no-results-hint">Try adjusting your search terms or location filters.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Theaters;
