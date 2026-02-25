import React, { useContext, useState } from 'react';
import { Calendar, MapPin, Clock, Ticket, Download, X, CheckCircle, AlertCircle, Lock } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import './MyBookings.css'; // Will also update this if needed

const MyBookings = () => {
  const { bookings, user, handleCancelBooking } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [isSignedIn, setIsSignedIn] = useState(true); // Assuming signed in for demo

  // Filter out upcoming and past depending on date, but for demo let's just use all as upcoming
  const upcomingBookings = bookings.filter(b => b.status === "confirmed");
  const pastBookings = bookings.filter(b => b.status === "completed");

  const displayBookings = activeTab === 'upcoming' ? upcomingBookings : pastBookings;

  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    if (isNaN(date)) return dateString; // fallback
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusIcon = (status) => {
    if (status === 'confirmed') return <CheckCircle className="status-confirmed" size={20} />;
    if (status === 'completed') return <CheckCircle className="status-completed" size={20} />;
    return <AlertCircle className="status-pending" size={20} />;
  };

  if (!isSignedIn) {
    return (
      <div className="bookings-container locked-state">
        <div className="locked-content">
          <Lock size={64} className="icon-locked text-gray" />
          <h2>Sign In Required</h2>
          <p>Please sign in to your account to view your movie bookings and ticket history.</p>
          <button onClick={() => setIsSignedIn(true)} className="btn btn-primary">
            Sign In to View Bookings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bookings-container section">
      <div className="section-header text-center">
        <h1 className="section-title">My Bookings</h1>
        <p className="text-secondary">Manage your movie tickets and booking history</p>
      </div>

      <div className="bookings-tabs">
        <button
          className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming ({upcomingBookings.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Past ({pastBookings.length})
        </button>
      </div>

      <div className="bookings-list">
        {displayBookings.length === 0 ? (
          <div className="empty-state">
            <Ticket size={64} className="icon-empty text-gray" />
            <p className="empty-title">No {activeTab} bookings found.</p>
            <p className="empty-desc">Your {activeTab} movie bookings will appear here.</p>
          </div>
        ) : (
          <div className="booking-grid">
            {displayBookings.map((booking) => (
              <div key={booking.id} className="booking-card">
                <img src={booking.movie.image} alt={booking.movie.title} className="booking-poster" />
                <div className="booking-info">
                  <div className="booking-header">
                    <div className="booking-title-row">
                      <h3>{booking.movie.title}</h3>
                      {getStatusIcon(booking.status)}
                    </div>
                    <div className="booking-actions">
                      <button className="btn btn-success btn-sm icon-btn">
                        <Download size={16} /> Download
                      </button>
                      {activeTab === 'upcoming' && (
                        <button
                          onClick={() => handleCancelBooking(booking.bookingId)}
                          className="btn btn-danger btn-sm icon-btn"
                        >
                          <X size={16} /> Cancel
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="booking-meta">
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{booking.theater || "Cinemabook Standard"}</span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{formatDate(booking.date)}</span>
                    </div>
                    <div className="meta-item">
                      <Clock size={16} />
                      <span>{booking.time || booking.movie.showtimes?.[0]}</span>
                    </div>
                  </div>

                  <div className="booking-seats">
                    <p>Seats (Count: {booking.tickets}):</p>
                    <div className="seat-badges">
                      {/* Generating dummy seats based on ticket count */}
                      {Array.from({ length: booking.tickets || 1 }).map((_, i) => (
                        <span key={i} className="badge badge-primary">Seat-{i + 1}</span>
                      ))}
                    </div>
                  </div>

                  <div className="booking-footer">
                    <div>
                      <p className="lbl">Booking ID</p>
                      <p className="val">{booking.bookingId}</p>
                    </div>
                    <div className="text-right">
                      <p className="lbl">Total Amount</p>
                      <p className="val text-success">₹{(booking.movie.price * (booking.tickets || 1)) * 80}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;