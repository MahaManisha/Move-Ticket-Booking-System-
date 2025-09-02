import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Ticket, Download, X, CheckCircle, AlertCircle, Lock } from 'lucide-react';
import './MyBookings.css'; // Ensure you have appropriate styles
import movie3 from "../assets/movie3.jpg";
import movie4 from "../assets/movie4.jpg";
import movie5 from "../assets/movie5.jpg";
import movie6 from "../assets/movie6.jpg";
import movie7 from "../assets/movie7.jpg";  
import movie8 from "../assets/movie8.jpg";
import movie9 from "../assets/movie9.jpg";
import movie10 from "../assets/movie10.jpg";  
const MyBookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Authentication state - In a real app, this would come from your auth context/state management
  const [isSignedIn, setIsSignedIn] = useState(true); // Changed to true to show bookings directly
  
  // Sample booking data with Tamil movies and relevant movie posters
  const bookings = {
    upcoming: [
      {
        id: 1,
        movieTitle: "விக்ரம் (Vikram)",
        theater: "PVR Cinemas - Phoenix Mall",
        date: "2025-09-15",
        time: "7:00 PM",
        seats: ["F12", "F13"],
        bookingId: "BK123456789",
        totalAmount: 560,
        status: "confirmed",
        poster: movie3
      },
      {
        id: 2,
        movieTitle: "லியோ (Leo)",
        theater: "INOX Leisure - Express Avenue",
        date: "2025-09-18",
        time: "2:30 PM",
        seats: ["D8", "D9", "D10"],
        bookingId: "BK123456790",
        totalAmount: 840,
        status: "confirmed",
        poster: movie4 // Thriller movie poster
      },
      {
        id: 3,
        movieTitle: "கைதி 2 (Kaithi 2)",
        theater: "Kamala Cinemas - Vadapalani",
        date: "2025-09-22",
        time: "9:00 PM",
        seats: ["H15", "H16"],
        bookingId: "BK123456791",
        totalAmount: 420,
        status: "confirmed",
        poster: movie5 // Crime thriller poster
      },
      {
        id: 4,
        movieTitle: "ஜவான் (Jawan)",
        theater: "AGS Cinemas - T. Nagar",
        date: "2025-09-25",
        time: "6:45 PM",
        seats: ["G7", "G8"],
        bookingId: "BK123456792",
        totalAmount: 520,
        status: "confirmed",
        poster: movie6 // Action drama poster
      },
      {
        id: 5,
        movieTitle: "வாரிசு (Varisu)",
        theater: "Rohini Silver Screens",
        date: "2025-09-28",
        time: "3:15 PM",
        seats: ["E10", "E11", "E12"],
        bookingId: "BK123456793",
        totalAmount: 750,
        status: "confirmed",
        poster: movie10
      }
    ],
    past: [
      {
        id: 6,
        movieTitle: "ஆர்ஆர்ஆர் (RRR)",
        theater: "AGS Cinemas - T. Nagar",
        date: "2025-08-25",
        time: "8:30 PM",
        seats: ["G5", "G6"],
        bookingId: "BK123456788",
        totalAmount: 480,
        status: "completed",
        poster: movie7// Epic movie poster
      },
      {
        id: 7,
        movieTitle: "மாஸ்டர் (Master)",
        theater: "Rohini Silver Screens",
        date: "2025-08-20",
        time: "4:00 PM",
        seats: ["C12"],
        bookingId: "BK123456787",
        totalAmount: 220,
        status: "completed",
        poster: movie8
      },
      {
        id: 8,
        movieTitle: "புஷ்பா (Pushpa)",
        theater: "Sathyam Cinemas - Express Avenue",
        date: "2025-08-15",
        time: "1:00 PM",
        seats: ["B8", "B9", "B10", "B11"],
        bookingId: "BK123456786",
        totalAmount: 720,
        status: "completed",
        poster: movie9
      }
    ]
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleDownloadTicket = (bookingId) => {
    alert(`Downloading ticket for booking ${bookingId}`);
  };

  const handleCancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      alert(`Cancelling booking ${bookingId}`);
    }
  };

  const handleSignIn = () => {
    // In a real app, this would navigate to sign-in page or open sign-in modal
    setIsSignedIn(true); // For demo purposes
  };

  const getStatusIcon = (status) => {
    if (status === 'confirmed') {
      return <CheckCircle className="status-icon status-confirmed" style={{ color: '#10b981', width: '20px', height: '20px' }} />;
    } else if (status === 'completed') {
      return <CheckCircle className="status-icon status-completed" style={{ color: '#6b7280', width: '20px', height: '20px' }} />;
    } else {
      return <AlertCircle className="status-icon status-pending" style={{ color: '#f59e0b', width: '20px', height: '20px' }} />;
    }
  };

  // Show authentication required message if user is not signed in
  if (!isSignedIn) {
    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          <Lock style={{ width: '64px', height: '64px', color: '#6b7280', margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>Sign In Required</h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            Please sign in to your account to view your movie bookings and ticket history.
          </p>
          <button 
            onClick={handleSignIn}
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Sign In to View Bookings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1f2937' }}>My Bookings</h1>
        <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>Manage your Tamil movie tickets and booking history</p>
      </div>

      {/* Tabs */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', backgroundColor: '#f3f4f6', padding: '4px', borderRadius: '8px', maxWidth: '400px', margin: '0 auto' }}>
          <button
            onClick={() => setActiveTab('upcoming')}
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              border: 'none',
              fontSize: '0.9rem',
              fontWeight: '500',
              cursor: 'pointer',
              backgroundColor: activeTab === 'upcoming' ? '#3b82f6' : 'transparent',
              color: activeTab === 'upcoming' ? 'white' : '#6b7280',
              transition: 'all 0.2s ease'
            }}
          >
            Upcoming ({bookings.upcoming.length})
          </button>
          <button
            onClick={() => setActiveTab('past')}
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              border: 'none',
              fontSize: '0.9rem',
              fontWeight: '500',
              cursor: 'pointer',
              backgroundColor: activeTab === 'past' ? '#3b82f6' : 'transparent',
              color: activeTab === 'past' ? 'white' : '#6b7280',
              transition: 'all 0.2s ease'
            }}
          >
            Past ({bookings.past.length})
          </button>
        </div>
      </div>

      {/* Bookings Content */}
      <div>
        {bookings[activeTab].length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#f9fafb', borderRadius: '12px' }}>
            <Ticket style={{ width: '64px', height: '64px', color: '#d1d5db', margin: '0 auto 1rem' }} />
            <p style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#6b7280' }}>No {activeTab} bookings found.</p>
            <p style={{ color: '#9ca3af' }}>Your {activeTab} Tamil movie bookings will appear here.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {bookings[activeTab].map((booking) => (
              <div key={booking.id} style={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <img 
                    src={booking.poster} 
                    alt={booking.movieTitle}
                    style={{
                      width: '120px',
                      height: '180px',
                      borderRadius: '8px',
                      objectFit: 'cover',
                      flexShrink: 0
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', margin: 0, color: '#1f2937' }}>{booking.movieTitle}</h3>
                        {getStatusIcon(booking.status)}
                      </div>
                      
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                          onClick={() => handleDownloadTicket(booking.bookingId)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            backgroundColor: '#10b981',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            cursor: 'pointer'
                          }}
                        >
                          <Download style={{ width: '16px', height: '16px' }} />
                          Download
                        </button>
                        {activeTab === 'upcoming' && (
                          <button
                            onClick={() => handleCancelBooking(booking.bookingId)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              padding: '0.5rem 1rem',
                              backgroundColor: '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              fontSize: '0.9rem',
                              fontWeight: '500',
                              cursor: 'pointer'
                            }}
                          >
                            <X style={{ width: '16px', height: '16px' }} />
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <MapPin style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                        <span style={{ color: '#374151' }}>{booking.theater}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                        <span style={{ color: '#374151' }}>{formatDate(booking.date)}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Clock style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                        <span style={{ color: '#374151' }}>{booking.time}</span>
                      </div>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <p style={{ fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem', color: '#6b7280' }}>Seats:</p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {booking.seats.map((seat, index) => (
                          <span key={index} style={{
                            backgroundColor: '#dbeafe',
                            color: '#1e40af',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '4px',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                          }}>
                            {seat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <p style={{ fontSize: '0.8rem', color: '#6b7280', margin: 0 }}>Booking ID:</p>
                        <p style={{ fontSize: '0.9rem', fontWeight: '500', color: '#374151', margin: 0 }}>{booking.bookingId}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '0.8rem', color: '#6b7280', margin: 0 }}>Total Amount:</p>
                        <p style={{ fontSize: '1.25rem', fontWeight: '700', color: '#059669', margin: 0 }}>₹{booking.totalAmount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Booking Summary */}
      {bookings[activeTab].length > 0 && (
        <div style={{ 
          marginTop: '2rem', 
          backgroundColor: 'white', 
          border: '1px solid #e5e7eb', 
          borderRadius: '12px', 
          padding: '1.5rem' 
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>Booking Summary</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
              <p style={{ fontSize: '2rem', fontWeight: '700', margin: 0, color: '#0284c7' }}>
                {bookings.upcoming.length}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>Upcoming Bookings</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
              <p style={{ fontSize: '2rem', fontWeight: '700', margin: 0, color: '#059669' }}>
                {bookings.past.length}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>Completed Bookings</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#fefce8', borderRadius: '8px' }}>
              <p style={{ fontSize: '2rem', fontWeight: '700', margin: 0, color: '#ca8a04' }}>
                ₹{bookings.upcoming.reduce((sum, booking) => sum + booking.totalAmount, 0)}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>Upcoming Value</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;